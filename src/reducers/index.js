import { combineReducers } from "redux";
import ProductReducer from "./productosReducer";

export default combineReducers({
   productos: ProductReducer
});