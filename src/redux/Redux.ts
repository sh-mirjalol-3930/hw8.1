import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice/ModalSlice";
import product_slice from "./product-slice/ProductSlice";

export const store = configureStore({
  reducer: {
    modalSlice,
    product_slice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

// type alieses
