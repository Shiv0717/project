import React from "react";
import Sidebar from "../components/Sidebar";
import BottomBar from "../components/BottomBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex h-screen bg-slate-50 justify-center">
      <ScrollToTop /> {/* Add here */}
      <div className="w-full max-w-9xl mx-auto flex gap-2 px-1">
        {/* Desktop Sidebar */}
        <div className="hidden md:block mt-6 ml-1">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          id="main-content-scroll"
          className="flex-1 lg:mt-6 overflow-auto p-2 bg-white border border-gray-100 mb-14 lg:mb-0"
        >
          <Outlet />
        </div>
      </div>
      {/* Mobile Bottom Bar */}
      <div className="md:hidden ">
        <BottomBar />
      </div>
    </div>
  );
}
