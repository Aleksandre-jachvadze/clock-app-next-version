import Panel from './Panel/Panel'

export default function PanelSection({ isExpanded, timeData }) {
  if (!timeData) return
  const classNames = `footer ${isExpanded ? 'max-h-[256px] md:max-h-[440px] xl:max-h-[400px] xl:mt-0' : 'max-h-0 xl:mt-10'} overflow-hidden`

  return (
    <footer className={classNames}>
      <div className="bg-white/75 dark:bg-black/75 backdrop-blur-xl text-dark-gray dark:text-white px-6 py-12 md:px-16 md:py-[7.5rem] xl:py-[4.625rem]">
        <div className="max-w-container mx-auto flex flex-col gap-4 md:flex-row md:gap-20 xl:gap-0 xl:divide-x xl:divide-dark-gray/25 xl:dark:divide-white/25">
          <div className="flex flex-col gap-4 md:gap-12 xl:gap-11 xl:pr-[9.25rem]">
            <Panel>
              <Panel.Description>Current Timezone</Panel.Description>
              <Panel.Value>{timeData.timezone}</Panel.Value>
            </Panel>
            <Panel>
              <Panel.Description>Day of the year</Panel.Description>
              <Panel.Value>{timeData.day_of_year}</Panel.Value>
            </Panel>
          </div>
          <div className="flex flex-col gap-4 md:gap-12 xl:gap-11 xl:pl-24">
            <Panel>
              <Panel.Description>Day of the week</Panel.Description>
              <Panel.Value>{timeData.day_of_week}</Panel.Value>
            </Panel>
            <Panel>
              <Panel.Description>Week number</Panel.Description>
              <Panel.Value>{timeData.week_number}</Panel.Value>
            </Panel>
          </div>
        </div>
      </div>
    </footer>
  )
}
