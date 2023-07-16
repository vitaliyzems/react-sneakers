import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    confirm: false,
  },
  reducers: {
    addOrder(state, action) {
      state.order = action.payload;
    },
    confirmOrder(state, action) {
      if (action.payload === "false") {
        state.confirm = false;
        return;
      }
      state.confirm = true;
    },
  },
});

export const { addOrder, confirmOrder } = orderSlice.actions;

export default orderSlice.reducer;
