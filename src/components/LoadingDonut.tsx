export default function LoadingDonut() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      <p className="mt-1 text-sm text-gray-500">로딩 중이에요...</p>
    </div>
  );
}
