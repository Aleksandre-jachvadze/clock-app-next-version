export default function PanelDescription({ children }) {
  return (
    <p className="text-[0.625rem] tracking-[2px] uppercase md:text-[0.8125rem] md:tracking-[2.6px] xl:text-body-2 xl:tracking-[3px]">
      {children}
    </p>
  )
}
