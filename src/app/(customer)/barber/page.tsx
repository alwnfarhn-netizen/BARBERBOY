import { Star, Scissors } from "lucide-react";
import Link from "next/link";
import { mockBarbers } from "@/data/mock";

export default function BarberPage() {
  return (
    <div className="max-w-6xl mx-auto w-full p-4 md:p-8 pt-12 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground">Kenali Barber Kami</h1>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Tim profesional kami siap memberikan pengalaman cukur terbaik untuk Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBarbers.map((barber) => (
          <div key={barber.id} className="bg-background rounded-3xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
            {/* Header / Avatar Area */}
            <div className="bg-secondary/40 pt-10 pb-6 px-6 flex flex-col items-center justify-center border-b border-border">
              <div className="w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-4xl mb-4 border-4 border-background shadow-md">
                {barber.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-center">{barber.name}</h2>
              <p className="text-primary font-medium text-sm mt-1">{barber.role}</p>
              
              <div className="flex items-center gap-1 mt-3 bg-background px-3 py-1 rounded-full border border-border shadow-sm">
                <Star size={14} className="fill-accent text-accent" />
                <span className="font-bold text-sm">{barber.rating}</span>
                <span className="text-xs text-muted-foreground ml-1">(120+ reviews)</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm italic mb-6 text-center line-clamp-3">
                "{barber.bio}"
              </p>
              
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Keahlian (Specialties)</h3>
                <div className="flex flex-wrap gap-2">
                  {barber.specialties.map(skill => (
                    <span key={skill} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md font-medium border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4">
                 <Link 
                  href={`/booking`} 
                  className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Scissors size={18} /> Booking dengan {barber.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
