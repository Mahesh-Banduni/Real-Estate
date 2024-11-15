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
} = authSlice.actions;
export default authSlice.reducer;
