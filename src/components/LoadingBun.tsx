export default function LoadingBun() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-12 h-12 animate-ping bg-yellow-300 rounded-full shadow-inner" />
      <p className="mt-2 text-sm text-gray-600">소금빵 굽는 중...</p>
    </div>
  );
}
