"use client";

import { Plus, Edit2, Trash2, ToggleRight } from "lucide-react";
import { mockServices } from "@/data/mock";

export default function LayananAdminPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manajemen Layanan</h1>
          <p className="text-muted-foreground mt-1">Atur harga dan jenis layanan potong rambut.</p>
        </div>
        <button onClick={() => alert("Fitur penambahan layanan akan tersedia pada tahap pengembangan backend (Fase 2).")} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Plus size={18} /> Tambah Layanan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockServices.map((service) => (
          <div key={service.id} className="bg-background border border-border p-5 rounded-xl shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{service.name}</h3>
              <span className="font-bold text-primary text-lg">Rp {service.price.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4">{service.description}</p>
            
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                ⏱ {service.durationMinutes} Menit
              </div>
              <div className="flex gap-1">
                <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-green-600 hover:bg-green-50 rounded-md" title="Aktif"><ToggleRight size={18} /></button>
                <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-blue-600 hover:bg-blue-50 rounded-md" title="Edit"><Edit2 size={18} /></button>
                <button onClick={() => alert("Fitur ini akan tersedia pada tahap pengembangan backend (Fase 2).")} className="p-2 text-red-600 hover:bg-red-50 rounded-md" title="Hapus"><Trash2 size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
