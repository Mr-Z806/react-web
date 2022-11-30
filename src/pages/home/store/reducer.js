import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    myHomeData: null
})

const getData = (state,action)=>{
    return state.set('myHomeData', action.data)
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_DATA:
            // return {
            //     ...state,
            //     myHomeData: action.data
            // }
            return getData(state,action)

        default:
            return state
    }
}
export default reducer