import React from "react";
import HeaderNav from "./navs/HeaderNav";
import { Toaster } from "./ui/toaster";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="logo__container">
          <Link href={'/'} className="logo">Zentra Audit</Link>
        </div>
        <HeaderNav />
      </div>
      <Toaster />
    </header>
  );
};

export default Header;
