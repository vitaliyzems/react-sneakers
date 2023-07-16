import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    fav: [],
  },
  reducers: {
    toggleFav(state, action) {
      const itemInFav = state.fav.find((item) => item.id === action.payload.id);
      if (!itemInFav) {
        state.fav.push(action.payload);
        return;
      }
      state.fav = state.fav.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { toggleFav } = favSlice.actions;

export default favSlice.reducer;
