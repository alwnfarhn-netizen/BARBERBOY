import { Scissors, CalendarClock } from "lucide-react";
import Link from "next/link";
import { mockServices } from "@/data/mock";

export default function LayananPage() {
  return (
    <div className="max-w-5xl mx-auto w-full p-4 md:p-8 pt-12 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground">Katalog Layanan</h1>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Pilihan perawatan rambut terbaik untuk menunjang gaya maksimal Anda. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockServices.map((service) => (
          <div key={service.id} className="bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{service.name}</h2>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-lg">
                  Rp {service.price.toLocaleString('id-ID')}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                <div className="flex items-center gap-2 text-sm text-secondary-foreground/70 font-medium">
                  <CalendarClock size={16} /> Estimasi {service.durationMinutes} Menit
                </div>
                <Link 
                  href="/booking" 
                  className="text-primary font-bold flex items-center gap-1 group-hover:underline"
                >
                  <Scissors size={16} /> Booking
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-secondary/50 p-8 rounded-2xl border border-border">
        <h2 className="text-xl font-bold mb-2">Bingung pilih gaya?</h2>
        <p className="text-muted-foreground mb-6">Barber kami siap memberikan konsultasi gratis sebelum eksekusi.</p>
        <Link href="/booking" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all inline-block shadow-md shadow-primary/20">
          Booking Jadwal Sekarang
        </Link>
      </div>
    </div>
  );
}
