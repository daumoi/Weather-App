import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "Loading",
    initialState: true,
    reducers: {
        loadDone: () => true,
        load: () => false,
    },
});

const { actions, reducer } = loadingSlice;
export const { loadDone, load } = actions;
export default reducer;
