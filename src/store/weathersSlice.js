import { createSlice } from "@reduxjs/toolkit";

const weathersSlice = createSlice({
    name: "weather",
    initialState: [{}, {}, {}, {}, {}, {}],
    reducers: {
        setWeathers: (state, action) => action.payload,
    },
});

const { actions, reducer } = weathersSlice;
export const { setWeathers } = actions;
export default reducer;
