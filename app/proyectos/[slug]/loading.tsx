export default function Loading() {
  return (
    <div>
      <div className="h-80 bg-stone-200 animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-3 gap-12">
        <div className="col-span-2 space-y-4">
          <div className="h-4 w-32 bg-stone-200 animate-pulse rounded" />
          <div className="h-10 w-2/3 bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-24 bg-stone-100 animate-pulse rounded" />
          <div className="space-y-2 mt-6">
            <div className="h-4 bg-stone-100 animate-pulse rounded" />
            <div className="h-4 bg-stone-100 animate-pulse rounded" />
            <div className="h-4 w-3/4 bg-stone-100 animate-pulse rounded" />
          </div>
        </div>
        <div className="bg-stone-50 border border-stone-200 p-6 space-y-3">
          <div className="h-4 w-24 bg-stone-200 animate-pulse rounded" />
          <div className="h-6 bg-stone-100 animate-pulse rounded" />
          <div className="h-6 bg-stone-100 animate-pulse rounded" />
        </div>
      </div>
    </div>
  )
}