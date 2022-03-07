import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./productsReducer";

export const productReducer = combineReducers({
    products: productsReducer
});