"use client";

import { Search, UserPlus, FileEdit, Trash2 } from "lucide-react";

const mockCustomers = [
  { id: "C001", name: "Ahmad Fauzan", whatsapp: "081234567890", visits: 12, totalSpent: 450000, lastVisit: "Hari ini" },
  { id: "C002", name: "Rizky Pratama", whatsapp: "081298765432", visits: 8, totalSpent: 300000, lastVisit: "Kemarin" },
  { id: "C003", name: "Budi Santoso", whatsapp: "085612345678", visits: 25, totalSpent: 950000, lastVisit: "3 Hari lalu" },
  { id: "C004", name: "Fajar Ramadhan", whatsapp: "089698761234", visits: 2, totalSpent: 60000, lastVisit: "Minggu lalu" },
  { id: "C005", name: "Dika Maulana", whatsapp: "082155556666", visits: 1, totalSpent: 30000, lastVisit: "Bulan lalu" },
];

export default function CustomerPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Database Customer</h1>
          <p className="text-muted-foreground mt-1">Kelola data pelanggan untuk program loyalitas.</p>
        </div>
        <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
          <UserPlus size={18} /> Tambah Customer
        </button>
      </div>

      <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-secondary/20">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Cari nama atau WhatsApp..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/40 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-semibold">Nama</th>
                <th className="px-6 py-4 font-semibold">WhatsApp</th>
                <th className="px-6 py-4 font-semibold text-center">Total Kunjungan</th>
                <th className="px-6 py-4 font-semibold text-right">Total Transaksi</th>
                <th className="px-6 py-4 font-semibold">Kunjungan Terakhir</th>
                <th className="px-6 py-4 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-secondary/10 transition-colors">
                  <td className="px-6 py-4 font-bold">{customer.name}</td>
                  <td className="px-6 py-4 font-mono text-muted-foreground">{customer.whatsapp}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-bold text-xs">
                      {customer.visits}x
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">Rp {customer.totalSpent.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{customer.lastVisit}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => alert("Fitur edit akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-blue-600 hover:bg-blue-50 rounded-md" title="Edit"><FileEdit size={16} /></button>
                      <button onClick={() => alert("Fitur hapus akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-red-600 hover:bg-red-50 rounded-md" title="Hapus"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
