import React from "react";
import Header from "../misc/Header";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DashboardWrapper;
