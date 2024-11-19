import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    phoneNumber: "",
    status: false,
    allProperties: [],
    token: "",
    recommendedProperties: [],
    handpickedProperties: [],
  },
  reducers: {
    handelSetToken: (state, action) => {
      state.token = action.payload;
    },
    handelFetchAllProperties: (state, action) => {
      state.allProperties = action.payload;
    },
    handelRemoveToken: (state, action) => {
      state.token = "";
    },
    handelPriceLowToHigh: (state, action) => {
      state.allProperties = state.allProperties.sort((a, b) => {
        return a.expectedPrice - b.expectedPrice;
      });
    },
    handelPriceHighToLow: (state, action) => {
      state.allProperties = state.allProperties.sort((a, b) => {
        return b.expectedPrice - a.expectedPrice;
      });
    },
    handelMostRecent: (state, action) => {
      state.allProperties = state.allProperties.sort(
        (a, b) => new Date(a.dateListed) - new Date(b.dateListed)
      );
    },
    handelFetchRecommendedProperty: (state, action) => {
      state.recommendedProperties = action.payload;
    },
    handelFetchHandpickedProperties: (state, action) => {
      state.handpickedProperties = action.payload;
    },
    phoneNumber: (state, action) => {
      console.log(action.payload);

      state.phoneNumber = action.payload;
    },
  },
});
export const {
  handelAddHandPickedProperty,
  handelFetchAllProperties,
  handelSetToken,
  handelRemoveToken,
  handelPriceLowToHigh,
  handelPriceHighToLow,
  handelMostRecent,
  handelFetchRecommendedProperty,
  handelFetchHandpickedProperties,
  phoneNumber,
} = authSlice.actions;
export default authSlice.reducer;
