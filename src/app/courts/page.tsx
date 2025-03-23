"use client";

import { useState } from "react";
import Link from "next/link";
import CourtCard from "@/components/courts/CourtCard";
import { mockCourts } from "@/lib/mockData";

export default function CourtsPage() {
  const [filters, setFilters] = useState({
    indoor: false,
    outdoor: false,
    paid: false,
    free: false,
  });

  const filteredCourts = mockCourts.filter((court) => {
    if (filters.indoor && filters.outdoor) {
      // If both are selected, show all
    } else if (filters.indoor && !court.isIndoor) {
      return false;
    } else if (filters.outdoor && court.isIndoor) {
      return false;
    }

    if (filters.paid && filters.free) {
      // If both are selected, show all
    } else if (filters.paid && !court.isPaid) {
      return false;
    } else if (filters.free && court.isPaid) {
      return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link
          href="/"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="indoor"
              checked={filters.indoor}
              onChange={(e) =>
                setFilters({ ...filters, indoor: e.target.checked })
              }
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="indoor" className="text-sm text-gray-700">
              Indoor
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="outdoor"
              checked={filters.outdoor}
              onChange={(e) =>
                setFilters({ ...filters, outdoor: e.target.checked })
              }
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="outdoor" className="text-sm text-gray-700">
              Outdoor
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="paid"
              checked={filters.paid}
              onChange={(e) =>
                setFilters({ ...filters, paid: e.target.checked })
              }
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="paid" className="text-sm text-gray-700">
              Paid
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="free"
              checked={filters.free}
              onChange={(e) =>
                setFilters({ ...filters, free: e.target.checked })
              }
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="free" className="text-sm text-gray-700">
              Free
            </label>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {filteredCourts.length}{" "}
          {filteredCourts.length === 1 ? "Court" : "Courts"} Found
        </h2>
      </div>

      {/* Court grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourts.map((court) => (
          <CourtCard key={court.id} {...court} />
        ))}
      </div>

      {/* No results message */}
      {filteredCourts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No courts found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
}
