import { createSlice } from "@reduxjs/toolkit";

const CFSlice = createSlice({
    name: "CF",
    initialState: "C",
    reducers: {
        setCF: (state, action) => action.payload,
    },
});

const { actions, reducer } = CFSlice;
export const { setCF } = actions;
export default reducer;
