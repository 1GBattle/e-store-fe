import { configureStore } from "@reduxjs/toolkit";
import api from "@/app/redux/api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import uiSlice from "@/app/redux/ui.Slice";
import { errorApi } from "@/app/about/error.api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    uiState: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(errorApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
