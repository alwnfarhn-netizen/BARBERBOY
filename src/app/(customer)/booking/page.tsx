"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Scissors, User, CalendarClock, ClipboardList, CheckCircle2 } from "lucide-react";
import { mockServices, mockBarbers, availableTimeSlots } from "@/data/mock";
import type { BookingDraft } from "@/types";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingDraft>({});

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Render content based on current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold mb-4">1. Pilih Layanan</h2>
            <div className="grid gap-3">
              {mockServices.map((service) => (
                <div 
                  key={service.id} 
                  onClick={() => { setBooking({ ...booking, serviceId: service.id }); nextStep(); }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 hover:shadow-md ${booking.serviceId === service.id ? 'border-primary bg-primary/5' : 'border-border bg-background'}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <span className="font-bold text-primary">Rp {service.price.toLocaleString('id-ID')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                  <div className="flex items-center gap-1 text-xs text-secondary-foreground/60 font-medium bg-secondary w-fit px-2 py-1 rounded-md">
                    <CalendarClock size={12} /> {service.durationMinutes} menit
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold mb-4">2. Pilih Barber</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option for Any Barber */}
              <div 
                onClick={() => { setBooking({ ...booking, barberId: "any" }); nextStep(); }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 flex items-center gap-4 ${booking.barberId === "any" ? 'border-primary bg-primary/5' : 'border-border bg-background'}`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Barber Siapapun</h3>
                  <p className="text-sm text-muted-foreground">Pilihkan barber yang tersedia paling cepat.</p>
                </div>
              </div>

              {mockBarbers.map((barber) => (
                <div 
                  key={barber.id} 
                  onClick={() => { setBooking({ ...booking, barberId: barber.id }); nextStep(); }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 flex gap-4 ${booking.barberId === barber.id ? 'border-primary bg-primary/5' : 'border-border bg-background'}`}
                >
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xl uppercase">
                     {barber.name.charAt(0)}
                   </div>
                   <div>
                     <h3 className="font-semibold text-lg flex items-center gap-2">
                       {barber.name} <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">★ {barber.rating}</span>
                     </h3>
                     <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{barber.role}</p>
                     <p className="text-xs text-secondary-foreground line-clamp-2 leading-relaxed">{barber.bio}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold mb-4">3. Pilih Waktu</h2>
            
            <div className="mb-6">
               <label className="block text-sm font-medium mb-2">Pilih Tanggal</label>
               <input 
                 type="date" 
                 value={booking.date || ""}
                 onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                 className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" 
                 min={new Date().toISOString().split("T")[0]}
               />
            </div>

            {booking.date && (
              <div>
                <label className="block text-sm font-medium mb-2">Pilih Jam</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableTimeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setBooking({ ...booking, time })}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${booking.time === time ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              disabled={!booking.date || !booking.time}
              onClick={nextStep}
              className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
            >
              Lanjut Isi Data Pribadi
            </button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold mb-4">4. Data Pribadi</h2>
            
            <div className="space-y-4">
              <div>
                 <label className="block text-sm font-medium mb-1">Nama Lengkap *</label>
                 <input 
                   type="text" 
                   placeholder="Contoh: Budi Santoso"
                   value={booking.customerName || ""}
                   onChange={(e) => setBooking({ ...booking, customerName: e.target.value })}
                   className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" 
                 />
              </div>
              <div>
                 <label className="block text-sm font-medium mb-1">Nomor WhatsApp *</label>
                 <input 
                   type="tel" 
                   placeholder="0812xxxxxx"
                   value={booking.whatsapp || ""}
                   onChange={(e) => setBooking({ ...booking, whatsapp: e.target.value })}
                   className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" 
                 />
              </div>
              <div>
                 <label className="block text-sm font-medium mb-1">Catatan Tambahan (Opsional)</label>
                 <textarea 
                   rows={3}
                   placeholder="Contoh: Tolong model cepak ya mas"
                   value={booking.note || ""}
                   onChange={(e) => setBooking({ ...booking, note: e.target.value })}
                   className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" 
                 ></textarea>
              </div>
            </div>

            <button 
              disabled={!booking.customerName || !booking.whatsapp}
              onClick={nextStep}
              className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
            >
              Review Booking
            </button>
          </div>
        );
      case 5:
        const selectedService = mockServices.find(s => s.id === booking.serviceId);
        const selectedBarber = booking.barberId === "any" ? { name: "Barber Siapa Saja" } : mockBarbers.find(b => b.id === booking.barberId);
        
        return (
          <div className="space-y-6 animate-in zoom-in-95 duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList size={32} />
              </div>
              <h2 className="text-2xl font-bold">Review Pesanan</h2>
              <p className="text-muted-foreground text-sm mt-1">Pastikan data Anda sudah benar sebelum konfirmasi.</p>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-5 border border-border/50 space-y-4">
              <div className="flex justify-between items-start border-b border-border/50 pb-3">
                <div>
                  <p className="text-sm text-muted-foreground">Layanan</p>
                  <p className="font-semibold text-lg">{selectedService?.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Harga</p>
                  <p className="font-bold text-primary">Rp {selectedService?.price.toLocaleString('id-ID')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-b border-border/50 pb-3">
                 <div>
                    <p className="text-sm text-muted-foreground">Barber</p>
                    <p className="font-medium">{selectedBarber?.name}</p>
                 </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Jadwal</p>
                    <p className="font-medium">{booking.date} | {booking.time}</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <p className="text-sm text-muted-foreground">Atas Nama</p>
                    <p className="font-medium">{booking.customerName}</p>
                 </div>
                 <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">{booking.whatsapp}</p>
                 </div>
              </div>
            </div>

            {/* Fake Success Submission for Prototype */}
            <button 
              onClick={() => alert("Booking Berhasil! Kode: BB-" + Math.floor(Math.random() * 10000))}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
            >
              <CheckCircle2 size={24} /> Konfirmasi Booking
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <header className="bg-background border-b border-border p-4 flex items-center gap-4 sticky top-0 z-50">
        <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors text-foreground">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="font-bold text-lg text-foreground flex items-center gap-2">
          <Scissors size={18} className="text-primary"/> Form Reservasi
        </h1>
      </header>

      <div className="flex-1 max-w-lg w-full mx-auto p-4 py-6 flex flex-col">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex flex-col items-center gap-1 w-full relative">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors relative z-10 ${
                  step === s ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30' : 
                  step > s ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground/50'
                }`}
              >
                {step > s ? <CheckCircle2 size={16} /> : s}
              </div>
              {/* Connector line */}
              {s < 5 && (
                 <div className={`absolute top-4 left-1/2 w-full h-[2px] -z-0 ${step > s ? 'bg-primary/30' : 'bg-secondary'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex-1">
          {renderStepContent()}
        </div>
      </div>
    </main>
  );
}
