import Link from "next/link";
import { Scissors, MapPin, CalendarClock, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        {/* Placeholder for actual background image, for now just a dark gradient feeling */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        
        <div className="relative z-20 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium uppercase tracking-wider mb-4 border border-border/50 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            New Place New Vibes
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground drop-shadow-sm">
            Profesional <span className="text-primary italic">Barbers.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Come in we are open. Nikmati pengalaman cukur premium dengan gaya modern dan maskulin di Surabaya & Driyorejo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link 
              href="/booking" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25"
            >
              Reservasi Sekarang <ChevronRight size={20} />
            </Link>
            <Link 
              href="#location" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/80 transition-all border border-border"
            >
              Lihat Lokasi
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <CalendarClock size={24} />
            </div>
            <h3 className="font-semibold text-lg">Jam Operasional</h3>
            <p className="text-sm text-secondary-foreground/70">
              Sabtu - Kamis: 10.00 - 22.00<br/>Jumat: Mulai 13.00
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold text-lg">2 Cabang</h3>
            <p className="text-sm text-secondary-foreground/70">
              Lidah Wetan, Surabaya<br/>Bukit Citra Mas, Driyorejo
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Scissors size={24} />
            </div>
            <h3 className="font-semibold text-lg">Premium Service</h3>
            <p className="text-sm text-secondary-foreground/70">
              Haircut, Smooth & Shave,<br/>Down Perm & Kids
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
