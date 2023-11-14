import { configureStore } from "@reduxjs/toolkit";

import MessegerSlice from "./MessegerSlice";

const store = configureStore({
  reducer: {
    messages: MessegerSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
