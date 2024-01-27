import { configureStore } from "@reduxjs/toolkit";
import UserReduxSliceReducer from "../ReduxSlice/Slice";
const ReduxStore = configureStore({
    reducer: {
        AppUser: UserReduxSliceReducer
    }
});

export default ReduxStore