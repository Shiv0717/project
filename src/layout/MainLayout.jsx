import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen bg-slate-50 justify-center">

      {/* Wrapper for left margin + centered content */}
      <div className="w-full max-w-7xl flex gap-6 px-6">

        {/* Sidebar with left margin */}
        <div className="hidden md:block mt-6">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-6 overflow-auto p-6 bg-white rounded-xl shadow-sm">
          <Outlet />
        </div>

      </div>

    </div>
  );
}
