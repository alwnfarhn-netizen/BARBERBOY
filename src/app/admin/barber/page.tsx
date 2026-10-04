"use client";

import { Plus, Edit2, Trash2, ToggleRight } from "lucide-react";
import { mockBarbers } from "@/data/mock";

export default function BarberAdminPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manajemen Barber (Kapster)</h1>
          <p className="text-muted-foreground mt-1">Atur jadwal, status aktif, dan profil barber Anda.</p>
        </div>
        <button onClick={() => alert("Fitur penambahan barber akan tersedia pada tahap pengembangan backend (Fase 2).")} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Plus size={18} /> Tambah Barber
        </button>
      </div>

      <div className="overflow-x-auto bg-background rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/40 text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-semibold">Barber</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Rating</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockBarbers.map((barber) => (
              <tr key={barber.id} className="hover:bg-secondary/10 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      {barber.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{barber.name}</p>
                      <p className="text-xs text-muted-foreground">{barber.specialties[0]} dkk.</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-muted-foreground">{barber.role}</td>
                <td className="px-6 py-4">⭐ {barber.rating}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Aktif</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-green-600 hover:bg-green-50 rounded-md" title="Nonaktifkan"><ToggleRight size={16} /></button>
                    <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-blue-600 hover:bg-blue-50 rounded-md" title="Edit"><Edit2 size={16} /></button>
                    <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-red-600 hover:bg-red-50 rounded-md" title="Hapus"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
