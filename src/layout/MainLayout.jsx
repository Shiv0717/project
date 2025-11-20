import React from "react";
import Sidebar from "../components/Sidebar";
import BottomBar from "../components/BottomBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen bg-slate-50 justify-center">

      {/* Wrapper */}
      <div className="w-full max-w-9xl mx-auto flex gap-2 px-1">

        {/* Desktop Sidebar */}
        <div className="hidden md:block mt-6 ml-1">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:mt-6 overflow-auto p-2 bg-white border border-gray-100">
          <Outlet />
        </div>

      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden">
        <BottomBar />
      </div>

    </div>
  );
}
