import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: null,
  reducers: {
    setError: (_, { payload }) => payload,
    resetError: () => null,
  },
});

export const { setError, resetError } = errorSlice.actions;
