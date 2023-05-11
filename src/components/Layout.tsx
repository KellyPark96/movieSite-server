import React from "react";
import NavVar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavVar />
      <div>{children}</div>
    </>
  );
}
