import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../@types/types";

interface IState {
  data: ProductType[];
  coupon: number;
  favorites: ProductType[];
}

const initialState: IState = {
  data: JSON.parse(localStorage.getItem("shop") as string) || [],
  coupon: 0,
  favorites: JSON.parse(localStorage.getItem("favorites") as string) || [],
};

export const prodcut_slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.find((item) => item._id === payload._id)) {
        state.data = state.data.map((value) => {
          if (value._id === payload._id) {
            return {
              ...value,
              count: Number(value.count) + 1,
              userPrice: (Number(value.count) + 1) * value.price,
            };
          }
          return value;
        });

        localStorage.setItem("shop", JSON.stringify(state.data));
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, userPrice: payload.price, count: 1 },
      ];

      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    removeData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    incrementQuantity(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value._id === payload) {
          return {
            ...value,
            count: Number(value.count) + 1,
            userPrice: (Number(value.count) + 1) * value.price,
          };
        }
        return value;
      });
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    decrementQuantity(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value._id === payload) {
          if (Number(value.count) <= 1) {
            return null;
          }
          return {
            ...value,
            count: Number(value.count) - 1,
            userPrice: (Number(value.count) - 1) * value.price,
          };
        }
        return value;
      }).filter(v => v !== null) as ProductType[];
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    getCouponCode(state, { payload }) {
      state.coupon = payload;
    },
    addFavorite(state, { payload }) {
      if (!state.favorites.find((item) => item._id === payload._id)) {
        state.favorites = [...state.favorites, payload];
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((item) => item._id !== payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { getData, removeData, getCouponCode, incrementQuantity, decrementQuantity, addFavorite, removeFavorite } = prodcut_slice.actions;

export default prodcut_slice.reducer;
