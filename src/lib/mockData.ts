export interface Court {
  id: string;
  name: string;
  address: string;
  numberOfCourts: number;
  isIndoor: boolean;
  isPaid: boolean;
  imageUrl?: string;
  description?: string;
  amenities?: string[];
  hours?: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
}

export const mockCourts: Court[] = [
  {
    id: "1",
    name: "Central Park Pickleball Courts",
    address: "123 Park Avenue, City, State 12345",
    numberOfCourts: 4,
    isIndoor: false,
    isPaid: false,
    description: "Beautiful outdoor courts in the heart of the city.",
    amenities: ["Parking", "Water Fountain", "Restrooms"],
    hours: {
      Monday: { open: "6:00", close: "22:00" },
      Tuesday: { open: "6:00", close: "22:00" },
      Wednesday: { open: "6:00", close: "22:00" },
      Thursday: { open: "6:00", close: "22:00" },
      Friday: { open: "6:00", close: "22:00" },
      Saturday: { open: "8:00", close: "20:00" },
      Sunday: { open: "8:00", close: "20:00" },
    },
  },
  {
    id: "2",
    name: "Indoor Sports Complex",
    address: "456 Sports Way, City, State 12345",
    numberOfCourts: 6,
    isIndoor: true,
    isPaid: true,
    description:
      "Climate-controlled indoor facility with professional-grade courts.",
    amenities: ["Pro Shop", "Locker Rooms", "Cafe", "Equipment Rental"],
    hours: {
      Monday: { open: "7:00", close: "23:00" },
      Tuesday: { open: "7:00", close: "23:00" },
      Wednesday: { open: "7:00", close: "23:00" },
      Thursday: { open: "7:00", close: "23:00" },
      Friday: { open: "7:00", close: "23:00" },
      Saturday: { open: "8:00", close: "22:00" },
      Sunday: { open: "8:00", close: "22:00" },
    },
  },
  {
    id: "3",
    name: "Community Center Courts",
    address: "789 Community Blvd, City, State 12345",
    numberOfCourts: 2,
    isIndoor: false,
    isPaid: false,
    description: "Public courts maintained by the local community center.",
    amenities: ["Parking", "Water Fountain"],
    hours: {
      Monday: { open: "9:00", close: "20:00" },
      Tuesday: { open: "9:00", close: "20:00" },
      Wednesday: { open: "9:00", close: "20:00" },
      Thursday: { open: "9:00", close: "20:00" },
      Friday: { open: "9:00", close: "20:00" },
      Saturday: { open: "10:00", close: "18:00" },
      Sunday: { open: "10:00", close: "18:00" },
    },
  },
];
