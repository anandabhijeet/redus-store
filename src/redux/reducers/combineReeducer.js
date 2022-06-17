import { combineReducers } from "redux";
import { productReducer, productDetailsReducer } from "./productReducers";

const rootReducer = combineReducers({
    allProducts: productReducer,
    product: productDetailsReducer
})

export default rootReducer;