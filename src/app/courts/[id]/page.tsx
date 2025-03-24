import { notFound } from "next/navigation";
import CourtDetail from "@/components/courts/CourtDetail";
import { getCourt } from "@/lib/pocketbase";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourtPage({ params }: PageProps) {
  // In Next.js 15, we need to await the params
  const { id } = await params;
  const court = await getCourt(id);

  if (!court) {
    notFound();
  }

  return <CourtDetail court={court} />;
}
