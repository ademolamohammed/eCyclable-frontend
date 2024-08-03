import React, { ReactElement, useEffect, useState } from "react";
import NewFooter from "./element/footer/NewFooter";
import Header from "./element/header/header";


const HomeLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { REACT_APP_BASEURL: baseUrl } = process.env;

  return (
    <>
      <main role="main"  className="col bg-white">
        <div
        >
            <Header />
          {children}
        </div>
        <NewFooter />
      </main>
    </>
  );
};

export default HomeLayout;
