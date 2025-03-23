export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        {/* Back button skeleton */}
        <div className="mb-6">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image skeleton */}
          <div className="relative h-64 sm:h-80 w-full bg-gray-200"></div>

          {/* Content skeleton */}
          <div className="p-6">
            {/* Title and address */}
            <div className="space-y-3">
              <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>

            {/* Tags skeleton */}
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            </div>

            {/* Description skeleton */}
            <div className="mt-6">
              <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Amenities skeleton */}
            <div className="mt-6">
              <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Hours skeleton */}
            <div className="mt-6">
              <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
