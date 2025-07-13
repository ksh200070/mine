export default function LoadingDots() {
  return (
    <div className="flex items-center gap-1 text-xl">
      <span className="animate-bounce delay-0">.</span>
      <span className="animate-bounce delay-150">.</span>
      <span className="animate-bounce delay-300">.</span>
    </div>
  );
}
