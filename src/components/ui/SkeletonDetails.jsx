function SkeletonDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
      <div className="w-full h-64 bg-gray-200 rounded-2xl mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
}
export default SkeletonDetails;
