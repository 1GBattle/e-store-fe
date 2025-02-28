import { createSlice } from "@reduxjs/toolkit/react";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  return storedDarkMode ? JSON.parse(storedDarkMode) : true;
};
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: getInitialDarkMode(),
    isLoading: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
      state.darkMode = !state.darkMode;
    },
    setIsLoading: (state, action: { payload: boolean; type: string }) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleDarkMode, setIsLoading } = uiSlice.actions;
export default uiSlice.reducer;
