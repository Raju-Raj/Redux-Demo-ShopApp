import { combineReducers } from "redux";
import { productReducer, selectedProductReducers } from "./productReducer";

export const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducers
})