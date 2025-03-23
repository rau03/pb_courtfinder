import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Find Pickleball Courts Near You
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              Discover the perfect court for your next game. Search through
              indoor and outdoor courts in your area.
            </p>
          </div>

          {/* Search Section */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Enter your location..."
                className="flex-1 min-w-0 block w-full px-4 py-4 rounded-l-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button className="inline-flex items-center px-6 py-4 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courts Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Courts
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for court cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-600">
              Court listings will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
