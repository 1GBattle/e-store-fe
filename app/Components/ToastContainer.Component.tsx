"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function ToastContainerComponent() {
  return (
    <ToastContainer hideProgressBar theme="colored" position="bottom-right" />
  );
}
