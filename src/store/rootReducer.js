import { combineReducers } from "redux";
import loadingReducer from "./loadingSlice";
import cityReducer from "./citySlice";
import weathersReducer from "./weathersSlice";

// const rootReducer = combineReducers({ isLoading: loadingReducer });

export default combineReducers({
    isLoading: loadingReducer,
    city: cityReducer,
    weathers: weathersReducer,
});
