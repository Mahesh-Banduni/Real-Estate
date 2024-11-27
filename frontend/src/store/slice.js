import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    phoneNumber: "",
    status: false,
    allProperties: [],
    properties: [],
    ownedProperties: [],
    wishlist: [],
    searchedProperties: [],
    token: "",
    recommendedProperties: [],
    handpickedProperties: [],
    filters: {
      city: "",
      locality: "",
      propertyType: "",
      propertyPurpose: "Sale",
      minPrice: "",
      maxPrice: "",
    },
  },
  reducers: {
    handelSetToken: (state, action) => {
      state.token = action.payload;
    },
    handelFetchAllProperties: (state, action) => {
      state.allProperties = action.payload;
    },
    handleFetchAllSearchProperties: (state, action) => {
      state.allProperties = action.payload;
      state.searchedProperties = action.payload;
    },
    handleFetchAllOwnedProperties: (state, action) => {
      state.ownedProperties = action.payload;
    },
    handelRemoveToken: (state, action) => {
      state.token = "";
    },
    handleFetchWishlistProperties: (state, action) => {
      state.wishlist = action.payload;
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
    handlePriceLowToHigh: (state, action) => {
      state.ownedProperties = state.ownedProperties.sort((a, b) => {
        return a.expectedPrice - b.expectedPrice;
      });
    },
    handlePriceHighToLow: (state, action) => {
      state.ownedProperties = state.ownedProperties.sort((a, b) => {
        return b.expectedPrice - a.expectedPrice;
      });
    },
    handleMostRecent: (state, action) => {
      state.ownedProperties = state.ownedProperties.sort(
        (a, b) => new Date(a.dateListed) - new Date(b.dateListed)
      );
    },
    handelUpdateFilters: (state, action) => {
      if (action.payload.name === "priceRange") {
        const [minPrice, maxPrice] = action.payload.value.split("-");
        state.filters.minPrice = minPrice;
        state.filters.maxPrice = maxPrice;
      } else {
        state.filters[action.payload.name] = action.payload.value;
      }
    },
    handlePriceLowToHighW: (state, action) => {
      state.wishlist = state.wishlist.sort((a, b) => {
        return a.expectedPrice - b.expectedPrice;
      });
    },
    handlePriceHighToLowW: (state, action) => {
      state.wishlist = state.wishlist.sort((a, b) => {
        return b.expectedPrice - a.expectedPrice;
      });
    },
    handleMostRecentW: (state, action) => {
      state.wishlist = state.wishlist.sort(
        (a, b) => new Date(a.dateListed) - new Date(b.dateListed)
      );
    },
  },
});
export const {
  handelAddHandPickedProperty,
  handelFetchAllProperties,
  handleFetchAllOwnedProperties,
  handleFetchAllSearchProperties,
  handleFetchWishlistProperties,
  handelSetToken,
  handelRemoveToken,
  handelPriceLowToHigh,
  handelPriceHighToLow,
  handelMostRecent,
  handelFetchRecommendedProperty,
  handelFetchHandpickedProperties,
  phoneNumber,
  handlePriceLowToHigh,
  handlePriceHighToLow,
  handleMostRecent,
  handelUpdateFilters,
  handlePriceLowToHighW,
  handlePriceHighToLowW,
  handleMostRecentW
} = authSlice.actions;
export default authSlice.reducer;
