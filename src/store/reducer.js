import { combineReducers } from "redux-immutable";
import { reducer as homeReducer } from "@/pages/home/store";
import { reducer as headerReducer } from "@/components/header/store";

const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer
})

export default reducer