"use client";

import { CalendarDays, Users, TrendingUp, Scissors, Clock } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Ringkasan aktivitas Barbershop hari ini.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Booking Hari Ini</p>
              <h3 className="text-3xl font-bold mt-2">12</h3>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <CalendarDays size={24} />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4 flex items-center gap-1 font-medium">
            <TrendingUp size={14} /> +3 dari kemarin
          </p>
        </div>

        <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pendapatan (Harian)</p>
              <h3 className="text-3xl font-bold mt-2">Rp 450rb</h3>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <TrendingUp size={24} />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4 flex items-center gap-1 font-medium">
            <TrendingUp size={14} /> +15% dari kemarin
          </p>
        </div>

        <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Antrean Aktif</p>
              <h3 className="text-3xl font-bold mt-2">3</h3>
            </div>
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <Clock size={24} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">2 sedang dilayani, 1 menunggu</p>
        </div>

        <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Customer Baru</p>
              <h3 className="text-3xl font-bold mt-2">4</h3>
            </div>
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <Users size={24} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Bulan ini total 45 customer</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Antrean Berjalan */}
        <div className="lg:col-span-2 bg-background rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="font-bold text-lg">Booking & Antrean Terbaru</h2>
            <Link href="/admin/booking" className="text-sm text-primary hover:underline font-medium">
              Lihat Semua
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm text-left">
              <thead className="bg-secondary/50 text-muted-foreground">
                <tr>
                  <th className="px-4 md:px-6 py-3 font-medium">Customer</th>
                  <th className="px-4 md:px-6 py-3 font-medium">Layanan</th>
                  <th className="px-4 md:px-6 py-3 font-medium">Jam</th>
                  <th className="px-4 md:px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 md:px-6 py-4 font-medium">Budi Santoso</td>
                  <td className="px-4 md:px-6 py-4">Haircut + Wash</td>
                  <td className="px-4 md:px-6 py-4">10:00</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Selesai</span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 md:px-6 py-4 font-medium">Rizky Pratama</td>
                  <td className="px-4 md:px-6 py-4">Smooth & Shave</td>
                  <td className="px-4 md:px-6 py-4">13:30</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Sedang Dilayani</span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 md:px-6 py-4 font-medium">Ahmad Fauzan</td>
                  <td className="px-4 md:px-6 py-4">Haircut</td>
                  <td className="px-4 md:px-6 py-4">15:00</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Menunggu</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-background rounded-xl border border-border shadow-sm p-6 space-y-4">
          <h2 className="font-bold text-lg mb-2">Aksi Cepat</h2>
          <button className="w-full flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-md"><Scissors size={18} /></div>
              <div>
                <p className="font-semibold text-sm">Buka Kasir / POS</p>
                <p className="text-xs text-muted-foreground">Proses pembayaran manual</p>
              </div>
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-md"><CalendarDays size={18} /></div>
              <div>
                <p className="font-semibold text-sm">Input Booking Offline</p>
                <p className="text-xs text-muted-foreground">Catat pelanggan walk-in</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
