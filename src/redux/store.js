import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
const store =configureStore({
    reducer:{
        students: listReducer
    }
})
export default store;