import { notFound } from "next/navigation";
import { mockCourts } from "@/lib/mockData";
import CourtDetail from "@/components/courts/CourtDetail";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function CourtPage({ params }: PageProps) {
  // In Next.js 15, we need to await the params even though they're not actually async in our case
  const court = mockCourts.find((c) => c.id === params.id);

  if (!court) {
    notFound();
  }

  return <CourtDetail court={court} />;
}
