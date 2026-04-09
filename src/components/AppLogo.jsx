import './AppLogo.css'

export default function AppLogo({ size = 'md', showTagline = false }) {
  const sizes = {
    sm: { icon: 28, text: 18 },
    md: { icon: 40, text: 26 },
    lg: { icon: 56, text: 36 },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className="app-logo">
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="app-logo__icon"
      >
        {/* Left ring */}
        <circle cx="20" cy="28" r="13" stroke="#C5A059" strokeWidth="2.5" fill="none" />
        <circle cx="20" cy="28" r="9" stroke="#D4B578" strokeWidth="1" fill="none" strokeDasharray="3 4" />
        {/* Right ring */}
        <circle cx="36" cy="28" r="13" stroke="#C5A059" strokeWidth="2.5" fill="none" />
        <circle cx="36" cy="28" r="9" stroke="#D4B578" strokeWidth="1" fill="none" strokeDasharray="3 4" />
        {/* Diamond */}
        <path d="M28 22 L32 26 L28 34 L24 26 Z" fill="#C5A059" opacity="0.85" />
        <path d="M24 26 L28 22 L32 26" fill="#D4B578" opacity="0.9" />
      </svg>
      <span className="app-logo__text" style={{ fontSize: s.text }}>
        marry me
      </span>
      {showTagline && (
        <span className="app-logo__tagline">Modern matrimony for a modern generation.</span>
      )}
    </div>
  )
}
