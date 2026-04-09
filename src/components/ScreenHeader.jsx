import './ScreenHeader.css'
import AppLogo from './AppLogo'

export default function ScreenHeader({ title, subtitle }) {
  return (
    <div className="screen-hdr">
      <AppLogo size="sm" />
      {title && <h1 className="screen-hdr__title">{title}</h1>}
      {subtitle && <p className="screen-hdr__subtitle">{subtitle}</p>}
    </div>
  )
}
