import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Bell,
  Users,
  Dog,
  FileText,
  LayoutDashboard,
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
      bg: "bg-orange-100 group-hover:bg-orange-200",
      activeBg: "bg-white/20",
      color: "text-orange-600",
    },
    {
      label: "Members",
      path: "/members",
      icon: Users,
      bg: "bg-green-100 group-hover:bg-green-200",
      activeBg: "bg-white/20",
      color: "text-green-600",
    },
    {
      label: "Pets",
      path: "/pets",
      icon: Dog,
      bg: "bg-amber-100 group-hover:bg-amber-200",
      activeBg: "bg-white/20",
      color: "text-amber-600",
    },
    {
      label: "Documents",
      path: "/documents",
      icon: FileText,
      bg: "bg-slate-100 group-hover:bg-slate-200",
      activeBg: "bg-white/20",
      color: "text-slate-600",
    },
  ];

  // ---------------- LINK CLASS ----------------
  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative
     ${
       isActive
         ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
         : "text-slate-600 hover:bg-slate-50 hover:text-slate-800 hover:translate-x-1"
     }`;

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-50 to-white border-r border-slate-100 h-auto p-6 shadow-sm rounded-3xl sticky top-6">
      {/* Header */}
      <div className="mb-8 pt-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
         Hi,Radha
        </h2>
        <p className="text-slate-500 text-sm mt-2">Community Management</p>
      </div>

      <nav className="space-y-2">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">
            Main
          </h3>

          {/* ---------- DYNAMIC MENU (MAP) ---------- */}
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                <div
                  className={`p-2 rounded-lg ${
                    isActive ? item.activeBg : item.bg
                  }`}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-white" : item.color}
                  />
                </div>

                <span className="flex-1 min-w-0 truncate">{item.label}</span>

                <ChevronRight
                  size={16}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
