export function Spinner({ loading }: { loading: boolean }) {
  return loading ? (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center backdrop-blur-sm bg-opacity-50">
      <div className="w-16 h-16 border-t-4 border-b-4 border-red-500 rounded-full animate-spin"></div>
    </div>
  ) : null;
}
