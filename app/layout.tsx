import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import ReduxProvider from "@/app/redux/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import ToastContainerComponent from "@/app/Components/ToastContainer.Component";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],

  weight: ["400"], // Default weight or desired weights
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${roboto.className} antialiased`}>
          {children}
          <ToastContainerComponent />
        </body>
      </ReduxProvider>
    </html>
  );
}
