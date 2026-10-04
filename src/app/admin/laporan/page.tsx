"use client";

import { BarChart3, TrendingUp, Calendar, Download } from "lucide-react";

export default function LaporanPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Laporan & Statistik</h1>
          <p className="text-muted-foreground mt-1">Pantau performa bisnis dan tren pendapatan Anda.</p>
        </div>
        <button onClick={() => alert("Fitur Export PDF memerlukan integrasi backend dan akan dikerjakan pada Fase 2.")} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2 border border-border">
          <Download size={18} /> Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for Charts */}
        <div className="lg:col-span-2 bg-background rounded-xl border border-border shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg flex items-center gap-2"><BarChart3 size={20} className="text-primary"/> Pendapatan Mingguan</h2>
            <select className="bg-secondary/50 border border-border rounded-md text-sm px-2 py-1 outline-none">
              <option>Minggu Ini</option>
              <option>Bulan Ini</option>
              <option>Tahun Ini</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2 px-2 pb-6 border-b border-border/50 relative">
            {/* Mock Chart Bars */}
            <div className="w-full flex justify-between items-end h-full pt-8">
              {[40, 70, 45, 90, 60, 100, 80].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-full">
                  <div className="w-8 sm:w-12 bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-all relative group" style={{ height: `${height}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {height}0k
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
           {/* Top Services */}
           <div className="bg-background rounded-xl border border-border shadow-sm p-6">
             <h2 className="font-bold text-lg mb-4 flex items-center gap-2"><TrendingUp size={20} className="text-primary"/> Layanan Terlaris</h2>
             <div className="space-y-4">
               <div>
                 <div className="flex justify-between text-sm mb-1"><span>Haircut</span><span className="font-bold">65%</span></div>
                 <div className="w-full h-2 bg-secondary rounded-full overflow-hidden"><div className="w-[65%] h-full bg-primary"></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1"><span>Smooth & Shave</span><span className="font-bold">20%</span></div>
                 <div className="w-full h-2 bg-secondary rounded-full overflow-hidden"><div className="w-[20%] h-full bg-primary/70"></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1"><span>Down Perm</span><span className="font-bold">15%</span></div>
                 <div className="w-full h-2 bg-secondary rounded-full overflow-hidden"><div className="w-[15%] h-full bg-primary/40"></div></div>
               </div>
             </div>
           </div>

           {/* Summary Cards */}
           <div className="bg-primary text-primary-foreground rounded-xl p-6 shadow-md shadow-primary/20">
             <h3 className="text-primary-foreground/80 font-medium text-sm">Total Bulan Ini</h3>
             <p className="text-3xl font-bold mt-1 mb-4">Rp 12.450.000</p>
             <div className="flex items-center gap-2 text-sm bg-background/20 w-fit px-3 py-1 rounded-full">
               <Calendar size={14} /> Oktober 2026
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
