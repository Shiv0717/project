import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Bell,
  Users,
  Dog,
  FileText,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  // ---------------- MENU ARRAY ----------------
  const menu = [
    {
      label: "Community Posts",
      path: "/posts",
      icon: Bell,
      bg: "bg-emerald-50 group-hover:bg-emerald-100",
      activeBg: "bg-emerald-500",
      color: "text-emerald-600",
    },
    {
      label: "Members",
      path: "/members",
      icon: Users,
      bg: "bg-sky-50 group-hover:bg-sky-100",
      activeBg: "bg-sky-500",
      color: "text-sky-600",
    },
    {
      label: "Pets",
      path: "/pets",
      icon: Dog,
      bg: "bg-amber-50 group-hover:bg-amber-100",
      activeBg: "bg-amber-500",
      color: "text-amber-600",
    },
    {
      label: "Documents",
      path: "/documents",
      icon: FileText,
      bg: "bg-slate-50 group-hover:bg-slate-100",
      activeBg: "bg-slate-600",
      color: "text-slate-600",
    },
  ];

  // ---------------- LINK CLASS ----------------
  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative
     ${
       isActive
         ? "bg-white text-slate-800 shadow-slate-200 border border-slate-100"
         : "text-slate-600 hover:bg-white hover:text-slate-800 m-2 hover:border hover:border-slate-100"
     }`;

  return (
    <aside className="w-80 bg-white border-r border-slate-100 h-auto p-6 sticky top-6">
      {/* Header */}
      <div className="mb-10 pt-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-linear-to-br from-emerald-400 to-sky-400 rounded-2xl flex items-center justify-center ">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Hi, Radha</h2>
            <p className="text-slate-500 text-sm">Community Manager</p>
          </div>
        </div>
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <nav className="space-y-1">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
            Navigation
          </h3>

          {/* ---------- DYNAMIC MENU (MAP) ---------- */}
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                <div
                  className={`p-2.5 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? `${item.activeBg} shadow-md` 
                      : `${item.bg} group-hover:scale-105`
                  }`}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-white" : item.color}
                  />
                </div>

                <span className="flex-1 min-w-0 text-[15px]">{item.label}</span>
                <ChevronRight
                  size={16}
                  className={`ml-auto transition-all duration-200 ${
                    isActive 
                      ? "text-slate-400 opacity-100" 
                      : "text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                  }`}
                />
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}