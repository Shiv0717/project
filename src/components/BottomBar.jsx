
import { NavLink, useLocation } from "react-router-dom";
import { Bell, Users, Dog, FileText } from "lucide-react";

export default function BottomBar() {
  const location = useLocation();

  const menu = [
    {
      label: "Community Posts",
      path: "/posts",
      icon: Bell,
      bg: "bg-emerald-50",
      activeBg: "bg-emerald-500",
      color: "text-emerald-600",
    },
    {
      label: "Members",
      path: "/members",
      icon: Users,
      bg: "bg-sky-50",
      activeBg: "bg-sky-500",
      color: "text-sky-600",
    },
    {
      label: "Pets",
      path: "/pets",
      icon: Dog,
      bg: "bg-amber-50",
      activeBg: "bg-amber-500",
      color: "text-amber-600",
    },
    {
      label: "Documents",
      path: "/documents",
      icon: FileText,
      bg: "bg-slate-50",
      activeBg: "bg-slate-600",
      color: "text-slate-600",
    },
  ];

  const mobileLinkClass = (isActive) =>
    `flex flex-col items-center gap-1 py-1 px-2 rounded-2xl transition-all duration-200 flex-1
     ${isActive ? "text-slate-900" : "text-slate-600"}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
      <div className="flex items-center justify-around px-2 py-1">

        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink key={item.path} to={item.path} className={mobileLinkClass(isActive)}>
              
              {/* FIXED SIZE ICON WRAPPER */}
              <div
                className={`h-9 w-9 flex items-center justify-center rounded-xl transition-all duration-200
                ${isActive ? item.activeBg : item.bg}`}
              >
                <Icon size={18} className={isActive ? "text-white" : item.color} />
              </div>

              <span className="text-[11px] font-medium text-center leading-tight max-w-[70px] truncate">
                {item.label}
              </span>

            </NavLink>
          );
        })}

      </div>
    </div>
  );
}
