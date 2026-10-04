"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Scissors, 
  Settings, 
  LogOut, 
  Calculator,
  PieChart,
  Menu,
  X
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Manajemen Booking", href: "/admin/booking", icon: <CalendarDays size={20} /> },
    { name: "Kasir (POS)", href: "/admin/kasir", icon: <Calculator size={20} /> },
    { name: "Customer", href: "/admin/customer", icon: <Users size={20} /> },
    { name: "Layanan", href: "/admin/layanan", icon: <Scissors size={20} /> },
    { name: "Barber", href: "/admin/barber", icon: <Users size={20} /> },
    { name: "Laporan", href: "/admin/laporan", icon: <PieChart size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar - Desktop & Mobile overlay */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border flex flex-col transition-transform duration-300 md:relative md:translate-x-0 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-border flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-primary flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Scissors size={16} />
            </div>
            ADMIN PANEL
          </div>
          <button className="md:hidden p-1 text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>
             <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${isActive ? "bg-primary/10 text-primary" : "hover:bg-secondary text-foreground"}`}
              >
                {link.icon}
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-1">
           <Link href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-secondary text-foreground rounded-md font-medium transition-colors">
            <Settings size={20} />
            Pengaturan
          </Link>
          <Link href="/login" className="w-full flex items-center gap-3 px-3 py-2 hover:bg-red-50 text-red-600 rounded-md font-medium transition-colors">
            <LogOut size={20} />
            Keluar
          </Link>
        </div>
      </aside>

      {/* Overlay background for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen w-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-background border-b border-border p-4 flex justify-between items-center sticky top-0 z-30">
           <div className="font-bold text-lg text-primary flex items-center gap-2">
            <Scissors size={16} /> ADMIN
          </div>
          <button 
            className="p-2 bg-secondary text-foreground rounded-md"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </header>

        <div className="p-4 md:p-8 flex-1 overflow-y-auto pb-24">
          {children}
        </div>
      </main>
    </div>
  );
}
