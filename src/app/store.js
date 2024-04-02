import { configureStore } from "@reduxjs/toolkit";
import NumberHolderSlice from "../feature/Numberholder";

export const store = configureStore({
    reducer:NumberHolderSlice,
})