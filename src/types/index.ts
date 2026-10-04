export type Service = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  durationMinutes: number;
  isActive: boolean;
};

export type Barber = {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  specialties: string[];
  rating: number;
  image: string;
  isActive: boolean;
};

export type BookingDraft = {
  serviceId?: string;
  barberId?: string;
  date?: string;
  time?: string;
  customerName?: string;
  whatsapp?: string;
  note?: string;
};
