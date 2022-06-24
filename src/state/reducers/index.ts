import { combineReducers } from "redux";
import Reducer from "./Reducer"

const reducers = combineReducers({
    bank: Reducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>