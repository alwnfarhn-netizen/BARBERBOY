"use client";

import { useState } from "react";
import { Search, Filter, MoreVertical, Eye, CheckCircle, XCircle, Scissors } from "lucide-react";

type BookingStatus = "Menunggu" | "Dikonfirmasi" | "Sedang Dilayani" | "Selesai" | "Dibatalkan";

interface Booking {
  id: string;
  code: string;
  customerName: string;
  service: string;
  barber: string;
  time: string;
  status: BookingStatus;
  price: number;
}

const mockBookings: Booking[] = [
  { id: "1", code: "BB-4921", customerName: "Ahmad Fauzan", service: "Haircut", barber: "Andi", time: "10:00", status: "Selesai", price: 30000 },
  { id: "2", code: "BB-8234", customerName: "Rizky Pratama", service: "Smooth & Shave", barber: "Fajar", time: "11:30", status: "Selesai", price: 25000 },
  { id: "3", code: "BB-1123", customerName: "Budi Santoso", service: "Haircut + Wash", barber: "Rizky", time: "13:00", status: "Sedang Dilayani", price: 40000 },
  { id: "4", code: "BB-9012", customerName: "Fajar Ramadhan", service: "Down Perm", barber: "Andi", time: "15:00", status: "Dikonfirmasi", price: 80000 },
  { id: "5", code: "BB-3341", customerName: "Dika Maulana", service: "Haircut", barber: "Fajar", time: "16:30", status: "Menunggu", price: 30000 },
  { id: "6", code: "BB-5521", customerName: "Wahyu Saputra", service: "Haircut + Wash", barber: "Rizky", time: "19:00", status: "Dibatalkan", price: 40000 },
];

export default function AdminBookingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("Semua");
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case "Menunggu": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Dikonfirmasi": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Sedang Dilayani": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Selesai": return "bg-green-100 text-green-700 border-green-200";
      case "Dibatalkan": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Mock function to change status
  const updateStatus = (id: string, newStatus: BookingStatus) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    alert(`Status berhasil diubah menjadi ${newStatus}`);
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || b.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "Semua" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manajemen Booking</h1>
          <p className="text-muted-foreground mt-1">Kelola daftar reservasi pelanggan.</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          + Tambah Booking Manual
        </button>
      </div>

      <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-secondary/20">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Cari nama atau kode..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={18} className="text-muted-foreground" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-2 rounded-lg border border-border bg-background text-sm focus:outline-none"
            >
              <option value="Semua">Semua Status</option>
              <option value="Menunggu">Menunggu</option>
              <option value="Dikonfirmasi">Dikonfirmasi</option>
              <option value="Sedang Dilayani">Sedang Dilayani</option>
              <option value="Selesai">Selesai</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/40 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Kode</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Customer</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Jadwal</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Layanan & Barber</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-secondary/10 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium text-xs">{booking.code}</td>
                    <td className="px-6 py-4 font-medium">{booking.customerName}</td>
                    <td className="px-6 py-4">Hari ini, {booking.time}</td>
                    <td className="px-6 py-4">
                      <div>{booking.service}</div>
                      <div className="text-xs text-muted-foreground">by {booking.barber}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {booking.status === "Menunggu" && (
                          <button onClick={() => updateStatus(booking.id, "Dikonfirmasi")} className="p-2 text-blue-600 hover:bg-blue-50 rounded-md" title="Konfirmasi">
                            <CheckCircle size={18} />
                          </button>
                        )}
                        {booking.status === "Dikonfirmasi" && (
                          <button onClick={() => updateStatus(booking.id, "Sedang Dilayani")} className="p-2 text-purple-600 hover:bg-purple-50 rounded-md" title="Mulai Layani">
                            <Scissors size={18} />
                          </button>
                        )}
                        {booking.status === "Sedang Dilayani" && (
                          <button onClick={() => updateStatus(booking.id, "Selesai")} className="p-2 text-green-600 hover:bg-green-50 rounded-md" title="Selesai">
                            <CheckCircle size={18} />
                          </button>
                        )}
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md" title="Detail">
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                    Data tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
