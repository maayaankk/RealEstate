
export const HouseReducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_ZPID':
            return({
                ...state,
                Input : {
                    ...state.Input,
                    addr: action.addr,
                    city: action.city,
                    sta: action.sta,
                    passed: action.passed,
                    loading: action.loading
                },
                Homes: action.info
            })
        case 'HOUSE_INFO':
            return (
                {...state,
                Display : {
                    ...state.Display,
                    DashBoard: action.dash,
                    Item: action.Item,
                    }
                }
            )
        case 'LOADING':
            return (
                {...state,
                Input : {
                    ...state.Input,
                    loading: action.loading,
                    }
                }
            )
        default:
            return state
    }
}