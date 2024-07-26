import React from "react";
import HeaderNav from "./navs/HeaderNav";
import { Toaster } from "./ui/toaster";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="logo__container">
          <div className="logo">Zentra Audit</div>
        </div>
        <HeaderNav />
      </div>
      <Toaster />
    </header>
  );
};

export default Header;
