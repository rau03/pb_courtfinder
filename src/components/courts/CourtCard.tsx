"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CourtCardProps {
  id: string;
  name: string;
  address: string;
  numberOfCourts: number;
  isIndoor: boolean;
  isPaid: boolean;
  imageUrl?: string;
}

export default function CourtCard({
  id,
  name,
  address,
  numberOfCourts,
  isIndoor,
  isPaid,
  imageUrl,
}: CourtCardProps) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = "/images/court-placeholder.jpg";

  return (
    <Link href={`/courts/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={imageError ? placeholderImage : imageUrl || placeholderImage}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-cover"
            onError={() => setImageError(true)}
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-gray-600">{address}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {numberOfCourts} {numberOfCourts === 1 ? "Court" : "Courts"}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {isIndoor ? "Indoor" : "Outdoor"}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {isPaid ? "Paid" : "Free"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
