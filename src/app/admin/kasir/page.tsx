"use client";

import { useState } from "react";
import { Calculator, ShoppingCart, User, Scissors, CheckCircle, CreditCard, Banknote, QrCode } from "lucide-react";
import { mockServices, mockBarbers } from "@/data/mock";

type PaymentMethod = "Cash" | "QRIS" | "Transfer";

export default function POSPage() {
  const [step, setStep] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Cash");
  const [cashAmount, setCashAmount] = useState<string>("");

  const activeService = mockServices.find(s => s.id === selectedService);
  const activeBarber = mockBarbers.find(b => b.id === selectedBarber);

  const resetPOS = () => {
    setStep(1);
    setCustomerName("");
    setSelectedService(null);
    setSelectedBarber(null);
    setPaymentMethod("Cash");
    setCashAmount("");
  };

  const handleCheckout = () => {
    alert(`Transaksi Selesai!\nAtas Nama: ${customerName || "Walk-in Customer"}\nTotal: Rp ${activeService?.price.toLocaleString('id-ID')}\nPembayaran: ${paymentMethod}`);
    resetPOS();
  };

  return (
    <div className="animate-in fade-in duration-300 flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Kasir (POS)</h1>
        <p className="text-muted-foreground mt-1">Sistem kasir cepat untuk pelanggan walk-in.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* Left Side: Selection Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Customer */}
          <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
            <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <User size={20} className="text-primary" /> 1. Data Pelanggan
            </h2>
            <input 
              type="text" 
              placeholder="Nama Pelanggan (opsional untuk Walk-in)..." 
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Step 2: Layanan */}
          <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
            <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <Scissors size={20} className="text-primary" /> 2. Pilih Layanan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockServices.map(service => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${selectedService === service.id ? 'border-primary bg-primary/10 shadow-sm' : 'border-border hover:border-primary/50 hover:bg-secondary/20'}`}
                >
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-primary font-bold mt-1">Rp {service.price.toLocaleString('id-ID')}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Barber */}
          <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
            <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <User size={20} className="text-primary" /> 3. Pilih Barber
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockBarbers.map(barber => (
                <button
                  key={barber.id}
                  onClick={() => setSelectedBarber(barber.id)}
                  className={`min-w-[120px] p-3 rounded-xl border text-center transition-all ${selectedBarber === barber.id ? 'border-primary bg-primary/10 shadow-sm' : 'border-border hover:border-primary/50 hover:bg-secondary/20'}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg mx-auto mb-2 uppercase">
                    {barber.name.charAt(0)}
                  </div>
                  <h3 className="font-medium text-sm">{barber.name}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Checkout / Cart */}
        <div className="lg:col-span-1">
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm sticky top-6">
            <h2 className="font-bold text-xl flex items-center gap-2 mb-6 border-b border-border pb-4">
              <ShoppingCart size={24} className="text-primary" /> Ringkasan Pembayaran
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Pelanggan</span>
                <span className="font-medium">{customerName || "Walk-in"}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Barber</span>
                <span className="font-medium">{activeBarber?.name || "-"}</span>
              </div>
              <div className="border-t border-dashed border-border pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{activeService?.name || "Belum ada layanan"}</p>
                    <p className="text-xs text-muted-foreground mt-1">1x</p>
                  </div>
                  <span className="font-medium">
                    Rp {activeService?.price.toLocaleString('id-ID') || "0"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg mb-6 border border-border/50">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-primary text-2xl">
                  Rp {activeService?.price.toLocaleString('id-ID') || "0"}
                </span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6 space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Metode Pembayaran</p>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setPaymentMethod("Cash")}
                  className={`py-2 flex flex-col items-center justify-center gap-1 rounded-lg border text-xs font-medium transition-colors ${paymentMethod === "Cash" ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:bg-secondary'}`}
                >
                  <Banknote size={16} /> Cash
                </button>
                <button 
                  onClick={() => setPaymentMethod("QRIS")}
                  className={`py-2 flex flex-col items-center justify-center gap-1 rounded-lg border text-xs font-medium transition-colors ${paymentMethod === "QRIS" ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:bg-secondary'}`}
                >
                  <QrCode size={16} /> QRIS
                </button>
                <button 
                  onClick={() => setPaymentMethod("Transfer")}
                  className={`py-2 flex flex-col items-center justify-center gap-1 rounded-lg border text-xs font-medium transition-colors ${paymentMethod === "Transfer" ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:bg-secondary'}`}
                >
                  <CreditCard size={16} /> Transfer
                </button>
              </div>
            </div>

            {paymentMethod === "Cash" && activeService && (
              <div className="mb-6">
                <label className="text-sm font-medium text-muted-foreground block mb-2">Uang Diterima</label>
                <input 
                  type="number" 
                  value={cashAmount}
                  onChange={(e) => setCashAmount(e.target.value)}
                  placeholder="Rp..."
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
                />
                {Number(cashAmount) > activeService.price && (
                   <p className="text-sm mt-2 text-green-600 font-medium">
                     Kembalian: Rp {(Number(cashAmount) - activeService.price).toLocaleString('id-ID')}
                   </p>
                )}
              </div>
            )}

            <button 
              onClick={handleCheckout}
              disabled={!activeService || !activeBarber}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/20 flex items-center justify-center gap-2"
            >
              <CheckCircle size={20} /> Proses Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
