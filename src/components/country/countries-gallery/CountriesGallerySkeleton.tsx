export const CountriesGallerySkeleton = () => {
  return (
    <div className="animate-pulse flex flex-wrap gap-4">
      {Array.from({length: 5}).map((v,i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="w-20 h-[60px] rounded bg-gray"></div>
          <div className="h-4 rounded-lg bg-gray"></div>
        </div>
      ))}
    </div>
  )
}
