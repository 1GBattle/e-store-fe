"use client";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import React, { ReactNode } from "react";
import UiThemeProvider from "@/app/redux/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <UiThemeProvider>{children}</UiThemeProvider>
    </Provider>
  );
}
