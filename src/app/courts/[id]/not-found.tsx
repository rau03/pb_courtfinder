import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Court Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the court you're looking for.
        </p>
        <Link
          href="/courts"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View All Courts
        </Link>
      </div>
    </div>
  );
}
