
export interface BaithakLocation {
  id: number;
  city: string;
  type: 'Cart' | 'Café' | 'Partner Dhaba';
  address: string;
  phone?: string;
  hours: string;
  image: string;
  mapLink: string;
}
