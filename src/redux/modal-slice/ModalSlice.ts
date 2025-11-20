import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  authorizationModalVisibltiy: boolean;
  profileModalVisibility: boolean;
}
const initialState: InitialStateType = {
  authorizationModalVisibltiy: false,
  profileModalVisibility: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    authorizationModalVisibltiyConf(state) {
      state.authorizationModalVisibltiy = !state.authorizationModalVisibltiy;
    },
    profileModalVisibilityConf(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
  },
});

export const { authorizationModalVisibltiyConf, profileModalVisibilityConf } = modalSlice.actions;

export default modalSlice.reducer;
