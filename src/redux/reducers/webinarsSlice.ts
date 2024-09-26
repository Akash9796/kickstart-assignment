import { createSlice } from "@reduxjs/toolkit";
import webinarData from "../../constants/webinarMockData";

const initialState = {
  webinars: webinarData,
  filteredWebinars: [],
  majorTopics: [],
  filterTopic: [],
};
const webinarsSlice = createSlice({
  name: "webinarsData",
  initialState,
  reducers: {
    updateWebinars: (state, action) => {
      state.webinars = action.payload;
    },
    updateSearchFilterWebs: (state, action) => {
      state.filteredWebinars = action.payload;
    },
    setMajorTopics: (state, action) => {
      state.majorTopics = action.payload;
    },
    setFilterTopic: (state, action) => {
      state.filterTopic = action.payload;
    },
  },
});
export const {
  updateWebinars,
  updateSearchFilterWebs,
  setMajorTopics,
  setFilterTopic,
} = webinarsSlice.actions;
export default webinarsSlice.reducer;
