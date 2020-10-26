import { combineReducers } from "redux";
import loadingReducer from "./loadingSlice";
import cityReducer from "./citySlice";
import weathersReducer from "./weathersSlice";
import CFReducer from "./CFSlice";

// const rootReducer = combineReducers({ isLoading: loadingReducer });

export default combineReducers({
    isLoading: loadingReducer,
    city: cityReducer,
    weathers: weathersReducer,
    CF: CFReducer,
});
