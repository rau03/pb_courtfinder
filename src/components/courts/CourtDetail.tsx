"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Court } from "@/lib/mockData";

interface CourtDetailProps {
  court: Court;
}

export default function CourtDetail({ court }: CourtDetailProps) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = "/images/court-placeholder.jpg";

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/courts"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Courts
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Court Image */}
        <div className="relative h-64 sm:h-80 w-full bg-gray-100">
          <Image
            src={
              imageError ? placeholderImage : court.imageUrl || placeholderImage
            }
            alt={court.name}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            onError={() => setImageError(true)}
            priority
          />
        </div>

        {/* Court Information */}
        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{court.name}</h1>
              <p className="mt-2 text-gray-600">{court.address}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {court.numberOfCourts}{" "}
                {court.numberOfCourts === 1 ? "Court" : "Courts"}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {court.isIndoor ? "Indoor" : "Outdoor"}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                {court.isPaid ? "Paid" : "Free"}
              </span>
            </div>
          </div>

          {/* Description */}
          {court.description && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">About</h2>
              <p className="mt-2 text-gray-600">{court.description}</p>
            </div>
          )}

          {/* Amenities */}
          {court.amenities && court.amenities.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {court.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hours */}
          {court.hours && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Hours of Operation
              </h2>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(court.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <span className="font-medium text-gray-900">{day}</span>
                    <span className="text-gray-600">
                      {hours.open} - {hours.close}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
