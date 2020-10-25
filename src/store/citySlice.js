import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./loadingSlice";
import { setWeathers } from "./weathersSlice";
import { searchCity, getWeathers } from "../api";

export const setLocationCity = createAsyncThunk(
    "city/setCurrentCity",
    async ({ latt, long }, { dispatch }) => {
        dispatch(setLoading(true));
        const res = await searchCity(latt, long).then((arr) => arr[0]);
        const weathers = await getWeathers(res.id);
        console.log(weathers);
        dispatch(setWeathers(weathers));
        dispatch(setLoading(false));
        return res;
    }
);

export const setCity = createAsyncThunk(
    "city/setCity",
    async (city, { dispatch }) => {
        dispatch(setLoading(true));
        const weathers = await getWeathers(city.id);
        dispatch(setWeathers(weathers));
        dispatch(setLoading(false));
        return city;
    }
);

const citySlice = createSlice({
    name: "city",
    initialState: { name: "", id: "" },
    extraReducers: {
        [setLocationCity.fulfilled]: (state, action) => action.payload,
        [setCity.fulfilled]: (state, action) => action.payload,
    },
});

const { reducer } = citySlice;
export default reducer;
