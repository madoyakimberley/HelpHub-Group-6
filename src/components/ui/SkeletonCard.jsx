function SkeletonCard() {
  return (
    <div className="p-4 border border-gray-100 rounded-2xl bg-white shadow-sm animate-pulse">
      <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>

      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
export default SkeletonCard;
