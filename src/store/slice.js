import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    allProperties: [],
    handpickedProperty: [],
    token: "",
  },
  reducers: {
    handelSetToken: (state, action) => {
      state.token = action.payload;
    },
    handelAddHandPickedProperty: (state, action) => {
      state.handpickedProperty = action.payload;
    },
    handelFetchAllProperties: (state, action) => {
      state.allProperties = action.payload;
    },
    handelRemoveToken: (state, action) => {
      state.token = "";
    },
  },
});
export const {
  handelAddHandPickedProperty,
  handelFetchAllProperties,
  handelSetToken,
  handelRemoveToken,
} = authSlice.actions;
export default authSlice.reducer;
