import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice.js";

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Key should match the slice name
    },
});
