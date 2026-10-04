"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scissors, Home, Grid, Users, CalendarCheck } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Top Navbar (Hidden on mobile) */}
      <header className="hidden md:flex items-center justify-between p-4 px-8 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="font-bold text-xl tracking-tight text-primary flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <Scissors size={16} />
          </div>
          BARBERBOY
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className={`transition ${pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}>Home</Link>
          <Link href="/layanan" className={`transition ${pathname === '/layanan' ? 'text-primary' : 'hover:text-primary'}`}>Layanan</Link>
          <Link href="/barber" className={`transition ${pathname === '/barber' ? 'text-primary' : 'hover:text-primary'}`}>Barber</Link>
        </nav>
        <Link 
          href="/booking" 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-md"
        >
          Booking Now
        </Link>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-center p-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="font-bold text-lg tracking-tight text-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <Scissors size={12} />
          </div>
          BARBERBOY
        </Link>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 pb-safe">
        <div className="flex items-center justify-around p-3">
          <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Home size={20} />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link href="/layanan" className={`flex flex-col items-center gap-1 ${pathname === '/layanan' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Grid size={20} />
            <span className="text-[10px] font-medium">Layanan</span>
          </Link>
          <Link href="/booking" className="flex flex-col items-center gap-1 text-primary-foreground relative -top-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-background">
              <CalendarCheck size={20} />
            </div>
          </Link>
          <Link href="/barber" className={`flex flex-col items-center gap-1 ${pathname === '/barber' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Users size={20} />
            <span className="text-[10px] font-medium">Barber</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
