export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Animated Spinner */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-full h-full border-4 border-blue-300 border-t-transparent rounded-full animate-ping"></div>
      </div>

      {/* Loading Text */}
      <h2 className="text-xl font-semibold text-blue-700 animate-pulse">
        Loading your experience...
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        Please wait a moment
      </p>
    </div>
  );
}
