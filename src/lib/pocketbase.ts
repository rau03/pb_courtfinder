import PocketBase, { RecordModel } from "pocketbase";

// Initialize PocketBase
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export interface Court extends RecordModel {
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

export async function getCourt(id: string): Promise<Court | null> {
  try {
    const record = await pb.collection("courts").getOne<Court>(id);
    return record;
  } catch (error) {
    console.error("Error fetching court:", error);
    return null;
  }
}

export async function getCourts(): Promise<Court[]> {
  try {
    const records = await pb.collection("courts").getFullList<Court>({
      sort: "-created",
    });
    return records;
  } catch (error) {
    console.error("Error fetching courts:", error);
    return [];
  }
}

export default pb;
