export default function Skeleton() {
  return (
    <section className="mt-auto flex flex-col gap-12 justify-between items-start md:gap-20 xl:flex-row xl:items-end">
      <div className="flex flex-col gap-4">
        <div className="h-[25px] w-[200px] bg-zinc-400 rounded-xl animate-pulse md:h-[28px] md:w-[440px]"></div>
        <div className="h-[100px] w-[280px] bg-zinc-400 rounded-xl animate-pulse md:h-[175px] md:w-[425px] xl:w-[500px] xl:h-[200px]"></div>
        <div className="h-[25px] w-[150px] bg-zinc-400 rounded-xl animate-pulse md:h-[28px] md:w-[180px] xl:w-[240px]"></div>
      </div>
      <div className="h-[40px] w-[115px] bg-zinc-400 rounded-3xl animate-pulse md:h-[56px]"></div>
    </section>
  )
}
