import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "Loading",
    initialState: true,
    reducers: {
        setLoading: (state, action) => action.payload,
    },
});

const { actions, reducer } = loadingSlice;
export const { setLoading } = actions;
export default reducer;
