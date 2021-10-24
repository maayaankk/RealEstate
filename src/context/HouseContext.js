import React, { createContext, useReducer, useEffect } from "react";
import { HouseReducer } from "../reducer/HouseReducer";
import { GetHouseInfo } from "../utilities/HouseSearch";

const HouseContext = createContext();

const HouseContextProvider = props => {
  const [houses, dispatch] = useReducer(HouseReducer, {
    Homes: [
      {
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        taluka: "Andheri",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "1",
        face: "East",
        finishedSqFt: "500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Dattapada Road",
        taluka: "Borivali East",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "3.12CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/Project-Photo-7-Oberoi-Sky-City-Mumbai-5086084_450_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-39-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-38-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-37-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-36-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-35-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-34-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-33-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/02/23/Project-Photo-30-Oberoi-Sky-City-Mumbai-5086084_444_491.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/02/23/Project-Photo-27-Oberoi-Sky-City-Mumbai-5086084_747_1119.jpg",
          "https://img.staticmb.com/mbimages/project/popup/Project-Photo-12-Oberoi-Sky-City-Mumbai-5086084_450_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/Location-Plan-32-Oberoi-Sky-City-Mumbai-5086084_511_800.jpg"
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Off Western Express Highway, Dattapada Rd, Borivali East, Mumbai, Maharashtra 400066, Details:This is under construction possession will start on Jun 23. Nice skyscraper tower it will well look from the balcony with all modern amenities available is residents Mumbai. Location advantage educational institutions, hospitals, banks, College School shopping malls, and recreation areas being nearby. Oberoi Sky City offers good facilities also very close to western Express Highway and Borivali Railway Station.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.221850475897007,
        longitude: 72.86438522258356
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Subash Road",
        taluka: "Andheri East",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "1",
        finishedSqFt: "650",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_5_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_8_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_7_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_6_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_13_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_4_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_1_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_3_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbimages/project//popup/Location-Plan-4-Asta-Mumbai-5071680_400_477.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Multistorey apartment is available for sale. It is a good location property. Please contact for more details.₹ 1.65 Cr.Andheri East, Mumbai - Western Suburbs, Maharashtra. Semi-Furnished",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.148048709376102,
        longitude: 72.83938778615574
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Sion Tromby Road",
        taluka: "Chembur",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "6.9CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-11-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/16/Project-Photo-5-Purva-Clermont-Mumbai-5235629_345_1366.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-15-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-14-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-9-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-8-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-7-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-5-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Planned with utmost care and perfection High-rise residential development World Home Series Collection Grand entrance, impeccable designs",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.05095781173085,
        longitude: 72.89998442635721
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Colony Road",
        taluka: "Ghatkopar",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "3.2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/09/06/Project-Photo-17-Sandu-Sanskar-Mumbai-5097357_505_2000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/06/Project-Photo-13-Sandu-Sanskar-Mumbai-5097357_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/06/Project-Photo-12-Sandu-Sanskar-Mumbai-5097357_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/04/12/Location-Plan-17-Sandu-Sanskar-Mumbai-5097357_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/06/Floor-Plan-17-Sandu-Sanskar-Mumbai-5097357_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Connectivity to major areas of central and southern Mumbai, and Thane is excellent through the central line, LBS Marg, and the Eastern Express Highway. Further, the Eastern Express Highway, along with easy access to Kurla station (harbour line) provide connectivity to Navi Mumbai. The metro and Andheri-Kurla Road connect to Airport, and western suburbs. The under-construction Metro Line 4 (Wadala-Ghatkopar-Mulund-Kasarvadavali) which is expected by the end of 2022 would enhance connectivity to Mumbai and Thane. Moreover, Mumbai International Airport is located within 5-7 km from Ghatkopar West.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.046874060209696,
        longitude: 72.90715292764868
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Piramal Road",
        taluka: "Mulund",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "4.2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/08/12/Site-Photos-47-Piramal-Revanta-Mumbai-5098339_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/08/12/Project-Photo-46-Piramal-Revanta-Mumbai-5098339_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/05/03/Project-Photo-34-Piramal-Revanta-Mumbai-5098339_390_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/08/12/Site-Photos-48-Piramal-Revanta-Mumbai-5098339_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/05/03/Project-Photo-33-Piramal-Revanta-Mumbai-5098339_702_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/02/14/Project-Photo-31-Piramal-Revanta-Mumbai-5098339_500_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/02/14/Project-Photo-29-Piramal-Revanta-Mumbai-5098339_500_1000.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2018/11/05/Location-Plan-23-Piramal-Revanta-Mumbai-5098339_558_900.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Gate No. 3, Piramal Revanta Sales Office, near Marathon Cosmos, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.168472685047387,
        longitude: 72.93593786813133
      },
    ],
    Display: { DashBoard: true },
    Input: { passed: true }
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(houses));
  }, [houses]);
  useEffect(() => {
    //console.log(GetData('884 devon', 'Kearny', "nj"))
    /*
      if(houses.Homes.length < 1) {
        dispatch({type:'LOADING', loading: true})
        let UserInfo = {
          addr: "20 devon st",
          city: "East rutherford",
          sta: "NJ",
        }
        GetHouseInfo(UserInfo)
        .then(data => { 
          console.log(data)
          if (data) {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: data, passed: true, loading: false})
          } else {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: [], passed: false, loading: false})
          }
        })
      }
    }, []);
    */
  });
  return (
    <HouseContext.Provider value={{ houses, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export { HouseContextProvider, HouseContext };
