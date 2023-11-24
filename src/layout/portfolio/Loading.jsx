export default function Loading() {
  return (
    <div className="shadow rounded-md w-full mx-auto md:h-96">
  <div className="animate-pulse h-full flex items-end space-x-4 bg-slate-300 p-4">
    <div className="flex-1 space-y-6 py-1">  
      <div className="space-y-3">
        <div className="grid  grid-rows-2 gap-4">
          <div className="h-2 bg-slate-700 rounded w-1/2"></div>
          <div className="h-2 bg-slate-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
