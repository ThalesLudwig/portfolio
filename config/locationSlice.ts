import { createSlice } from "@reduxjs/toolkit";
import LANG from "../constants/lang";

export type LocationProps = {
  value: string;
};

const initialState: LocationProps = {
  value: LANG.EN,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setEnglish(state: LocationProps) {
      state.value = LANG.EN;
    },
    setPortuguese(state: LocationProps) {
      state.value = LANG.BR;
    },
  },
});

export const { setEnglish, setPortuguese } = locationSlice.actions;

export default locationSlice.reducer;
