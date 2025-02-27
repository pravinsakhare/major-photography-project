import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Settings, User, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Calendar, label: "My Bookings", href: "/dashboard/bookings" },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="w-64 bg-white/5 backdrop-blur-lg min-h-screen p-6 border-r border-white/10"
        >
          <div className="space-y-6">
            <div className="text-white/90">
              <h2 className="text-xl font-playfair">Welcome,</h2>
              <p className="text-sm text-white/70">
                {user?.firstName} {user?.lastName}
              </p>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => navigate(item.href)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}

              <Button
                variant="ghost"
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-3xl font-playfair text-white mb-8">{title}</h1>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
