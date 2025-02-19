import Nav from "@/app/Components/Nav.Component";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
