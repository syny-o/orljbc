// app/loading.tsx  (or app/(dashboard)/loading.tsx etc.)

const Loading = () => {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-accent">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-600 border-t-white" />

        {/* Text */}
        <div className="text-center text-white">
          <p className="font-medium">
            Načítám data…
          </p>
          <p className="text-sm text-gray-200">
            Chvilku strpení, prosím.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
