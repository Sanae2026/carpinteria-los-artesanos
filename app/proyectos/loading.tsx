export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="h-8 w-48 bg-stone-200 animate-pulse mb-8 rounded" />
      <div className="grid grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-stone-200 overflow-hidden">
            <div className="h-56 bg-stone-200 animate-pulse" />
            <div className="p-5 bg-white space-y-3">
              <div className="h-5 bg-stone-200 animate-pulse rounded w-3/4" />
              <div className="h-3 bg-stone-100 animate-pulse rounded w-1/2" />
              <div className="h-3 bg-stone-100 animate-pulse rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}