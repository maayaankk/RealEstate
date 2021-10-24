import axios from "axios";

import DomParser from 'dom-parser';

let FirstH = { zpidList: 0 };
let counter = 0;
let input = {}
export const GetHouseInfo = async (UserInfo) => {
  let Data = await fetch(`https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/HData?addr=${UserInfo.addr}&city=${UserInfo.city}&sta=${UserInfo.sta}`)
  let Resp = await Data.json()
  console.log(Resp)
  return Resp

  try {
    input = { addr: UserInfo.addr, city: UserInfo.city, sta: UserInfo.sta }
    return Promise.resolve(Search(input.addr, input.city, input.sta, "first"))
      .then(ndata => {
        if (ndata) {
          return Search("st", input.city, input.sta, "second");
        } else {
          return Search("st", input.city, input.sta, "secondSave");
        }
      })
      .then(zpidData => {
        if (zpidData) {
          return Promise.all(zpidData.map((item, index) => HouseInfo(item, index)));
        } else {
          console.log("done with ya")
          return false;
        }
      })
      .then(data => {
        if (data) {
          let HomeData = [];
          data.map(home => {
            if (typeof home !== "undefined") {
              if (home.state != "?") {
                home.id = counter++;
                home.latitude = parseFloat(home.latitude);
                home.longitude = parseFloat(home.longitude);
                if (home.bathrooms != "?") {
                  home.bathrooms = parseFloat(home.bathrooms, 10);
                }
                HomeData.push(home);
              }
            }
          });
          return HomeData;
        } else {
          console.log("Failed")
          return false;
        }
      });
  } catch (error) {
    console.log("error", error)
    if (error == "SHOWDEFUALT") {
      console.log("Thanks We are Done")
    }
  }
};
const GetHouseData = async (zpid) => {
  try {
    let Data = await axios.get(`https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/Info?zpid=${zpid}`)
    //let Data = await axios.get(`https://cy5tt5zme9.execute-api.us-east-1.amazonaws.com/Deploy/Info?zpid=${zpid}`)
    //let Data = await fetch(`http://52.87.152.58/Info/?zpid=${zpid}`)
    //let Data = await axios.get(`http://52.87.152.58/Info/?zpid=${zpid}`)
    //let Data = await axios.get(`http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&zpid=${zpid}`)
    //let resp = `${Data.data}`
    //return new DOMParser().parseFromString(resp, "application/xml")
    //console.log(Data.data)
    Data = `${Data.data}`
    let resp = new DOMParser().parseFromString(Data, "application/xml")
    return resp

  } catch (error) {
    console.error(error)
  }
}
const GetData = async (addr, city, sta) => {
  try {
    let Data = await axios.get(`https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/House?addr=${addr}&city=${city}&state=${sta}`)
    //let Data = await axios.get(`https://cy5tt5zme9.execute-api.us-east-1.amazonaws.com/Deploy/House?addr=${addr}&city=${city}&state=${sta}`)
    //let Data = await fetch(`http://52.87.152.58/House/?addr=${addr}&city=${city}&state=${sta}`)
    //let Data = await axios.get(`http://52.87.152.58/House/?addr=${addr}&city=${city}&state=${sta}`)
    //let Data = await axios.get(`http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&address=${addr}&citystatezip=${city}%2C+${sta}&rentzestimate=true`)
    //let resp = `${Data.msg}`
    //return Data.msg
    //console.log(Data.data)
    Data = `${Data.data}`
    let resp = new DOMParser().parseFromString(Data, "application/xml")
    return resp

  } catch (error) {
    console.error(error)
  }
}

const Search = (addr, city, state, first) => {
  let AddrUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&address=${addr}&citystatezip=${city}%2C+${state}&rentzestimate=true`;
  return GetData(addr, city, state)
    .then(xml => {
      let rent = "?";
      let amount = "";
      let ZpidList = [];
      if (!xml.getElementsByTagName("code")[0].innerHTML != 0 || !xml.getElementsByTagName("result")[0]) {
        if (first == "first") {
          throw "NOFIRSTHOUSE"
          //throw "NOFIRSTHOUSE"
        }
        if (first == "second") {
          throw "NOHOUSES"
        }
        if (first == "secondSave") {
          return false;
        }
      }
      if (first == "first") {
        let rentdata = xml.getElementsByTagName("rentzestimate")[0].childNodes[0].innerHTML;
        let amountdata = ""
        if (xml.getElementsByTagName("zestimate")[0].childNodes[0].innerHTML !== "") {
          amountdata = xml.getElementsByTagName("zestimate")[0].childNodes[0].innerHTML;
        }
        ZpidList.push({
          zpidList: xml.getElementsByTagName("result")[0].firstChild.innerHTML,//xml.getElementsByTagName("result")[0].childNodes[0].firstChild.innerHTML,
          rent: rentdata,
          amount: amountdata
        });
        FirstH = ZpidList[0];
      } else {
        if (first == "second") {
          ZpidList.push(FirstH);
        }
        let i = 0;
        let Home = xml.getElementsByTagName("result");
        while (typeof Home[i] !== "undefined") {
          let [...arrHouse] = xml.getElementsByTagName("result")[i].childNodes;
          let len = arrHouse.length
          for (let x = 0; len > x; x++) {
            if (arrHouse[x].nodeName === 'bedrooms') {
              rent = xml.getElementsByTagName("rentzestimate")[i].childNodes[0].innerHTML;
              if (xml.getElementsByTagName("zestimate")[i].childNodes[0].innerHTML !== "") {
                amount = xml.getElementsByTagName("zestimate")[i].childNodes[0].innerHTML;
              }
              ZpidList.push({
                zpidList: arrHouse[0].innerHTML,
                amount: amount,
                rent: rent
              });
              amount = "";
              break;
            }
          }
          i++;
        }
      }
      return ZpidList;
    })
    .catch(function (err) {
      console.log("error", err);
      if (err == "NOFIRSTHOUSE") {
        return false;
      }
      if (err == "NODATA") {
        console.log("All Done");
        return "NoData"
      }
    });
};

const HouseInfo = (zpid, index) => {
  //console.log(zpid);
  let InfoUrl = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&zpid=${zpid.zpidList}`;

  return Promise.resolve(
    GetHouseData(zpid.zpidList)
      .then(xml => {
        let AllImages = [];
        //console.log(xml)
        let HouseData = {
          city: "?",
          state: "?",
          street: "?",
          useCode: "Unknown",
          bedrooms: "?",
          bathrooms: "?",
          finishedSqFt: "",
          zpid: zpid.zpidList,
          rent: zpid.rent,
          amount: zpid.amount,
          index: index,
          images: [],
          desc: "No description provided",
          parkingType: "On-street",
          yearBuilt: "Unknown"
        };
        if (HouseData.amount) {
          HouseData.amount = parseInt(HouseData.amount, 10).toLocaleString()
        }
        if (HouseData.rent) {
          HouseData.rent = parseInt(HouseData.rent, 10).toLocaleString()
        }
        if (xml.getElementsByTagName("code")[0].innerHTML == 0) {
          if (
            (xml.getElementsByTagName("address")[0] &&
              xml.getElementsByTagName("editedFacts")[0]) ||
            index === 0
          ) {
            //UsedZpid.push(zpid);
            if (xml.getElementsByTagName("address")[0]) {
              let [...AddressInfo] = xml.getElementsByTagName("address")[0].childNodes;
              AddressInfo.map(Addr => {
                let AddrN = Addr.nodeName;
                let AddrI = Addr.innerHTML;
                HouseData = {
                  ...HouseData,
                  [AddrN]: AddrI
                };
              });
            }
            if (xml.getElementsByTagName("editedFacts")[0]) {
              let [...Facts] = xml.getElementsByTagName("editedFacts")[0].childNodes;
              Facts.map(info => {
                let infoN = info.nodeName;
                let infoI = info.innerHTML;
                HouseData = {
                  ...HouseData,
                  [infoN]: infoI
                };
              });
            }
            if (xml.getElementsByTagName("url")[0]) {
              let [...Images] = xml.getElementsByTagName("url");
              if (Images.length > 2) {
                let rand = Math.floor(Math.random() * (Images.length - 1))
                let temp = Images[0]
                Images[0] = Images[rand]
                Images[rand] = temp
              }
              Images.map(Img => {
                AllImages.push(Img.innerHTML);
              });
              HouseData = {
                ...HouseData,
                images: AllImages
              };
            }

            if (HouseData.images.length < 2) {
              AllImages.push(`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${HouseData.latitude},${HouseData.longitude}
							&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`);
              //puts satalite view from google

              HouseData = {
                ...HouseData,
                images: AllImages
              };
            }
            if (xml.getElementsByTagName("homeDescription")[0]) {
              let Description = xml.getElementsByTagName("homeDescription")[0].innerHTML;
              HouseData = {
                ...HouseData,
                desc: Description
              };
            }
          }
        }
        return HouseData;
      })
  );

};
  //HouseInfo('2082540322',2);


  //Search for the address to get zpid then push that to a list 
  //change address to "st" and search again grab all zpids
  //make indivdual zpid searches on each house