import PanelDescription from './PanelDescription'
import PanelValue from './PanelValue'

export default function Panel({ children }) {
  return <div className="flex justify-between items-center md:flex-col md:items-start xl:gap-2">{children}</div>
}

Panel.Description = PanelDescription
Panel.Value = PanelValue
