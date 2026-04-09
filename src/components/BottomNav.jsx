import { useNavigate, useLocation } from 'react-router-dom'
import './BottomNav.css'

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    path: '/matches',
    icon: (active) => (
      /* House with shield badge */
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 13L14 3L25 13V24C25 24.55 24.55 25 24 25H17V18H11V25H4C3.45 25 3 24.55 3 24V13Z"
          fill="#1C1814"
        />
        {/* Shield badge bottom-left */}
        <path
          d="M7 19.5C7 19.5 5 18.5 5 17V15L7 14.5L9 15V17C9 18.5 7 19.5 7 19.5Z"
          fill="#F5EDE0"
        />
      </svg>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    path: '/status',
    icon: (active) => (
      /* Lifebuoy / rescue ring */
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="11" stroke="#1C1814" strokeWidth="2.5" fill="none" />
        <circle cx="14" cy="14" r="6" stroke="#1C1814" strokeWidth="2.5" fill="none" />
        {/* Cross bars */}
        <line x1="9.76" y1="9.76" x2="6.51" y2="6.51" stroke="#1C1814" strokeWidth="2" strokeLinecap="round" />
        <line x1="18.24" y1="9.76" x2="21.49" y2="6.51" stroke="#1C1814" strokeWidth="2" strokeLinecap="round" />
        <line x1="18.24" y1="18.24" x2="21.49" y2="21.49" stroke="#1C1814" strokeWidth="2" strokeLinecap="round" />
        <line x1="9.76" y1="18.24" x2="6.51" y2="21.49" stroke="#1C1814" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'matches',
    label: 'Matches',
    path: '/matches',
    icon: (active) => (
      /* Location pin with heart + dotted trail */
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Map pin */}
        <path
          d="M14 3C10.13 3 7 6.13 7 10C7 15 14 24 14 24C14 24 21 15 21 10C21 6.13 17.87 3 14 3Z"
          fill="#1C1814"
        />
        {/* Heart inside pin (white cutout) */}
        <path
          d="M14 12.5C14 12.5 11.5 10.8 11.5 9.2C11.5 8.26 12.26 7.5 13.2 7.5C13.7 7.5 14 7.9 14 7.9C14 7.9 14.3 7.5 14.8 7.5C15.74 7.5 16.5 8.26 16.5 9.2C16.5 10.8 14 12.5 14 12.5Z"
          fill="#F5EDE0"
        />
        {/* Dotted trail to the right */}
        <circle cx="20" cy="22" r="1.5" fill="#1C1814" />
        <circle cx="24" cy="20" r="1.2" fill="#1C1814" opacity="0.6" />
        <circle cx="23" cy="17" r="1" fill="#1C1814" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'inbox',
    label: 'Inbox',
    path: '/inbox',
    icon: (active) => (
      /* Envelope with right arrow */
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope body */}
        <rect x="3" y="7" width="22" height="16" rx="2" fill="#1C1814" />
        {/* Flap / V fold */}
        <path d="M3 9L14 17L25 9" stroke="#F5EDE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Arrow pointing right (overlay) */}
        <path d="M19 18L22 21L19 24" stroke="#F5EDE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13" y1="21" x2="22" y2="21" stroke="#F5EDE0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'chat',
    label: 'Chat',
    path: '/chat',
    icon: (active) => (
      /* Speech bubble with 3 dots */
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 5C4 3.9 4.9 3 6 3H22C23.1 3 24 3.9 24 5V18C24 19.1 23.1 20 22 20H9L4 25V5Z"
          fill="#1C1814"
        />
        {/* Three dots */}
        <circle cx="10" cy="12" r="1.5" fill="#F5EDE0" />
        <circle cx="14" cy="12" r="1.5" fill="#F5EDE0" />
        <circle cx="18" cy="12" r="1.5" fill="#F5EDE0" />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="bottom-nav" id="bottom-nav">
      {NAV_ITEMS.map((item) => {
        const active = location.pathname === item.path && item.id !== 'home'
          ? true
          : item.id === 'home' && location.pathname === '/matches'
          ? false
          : location.pathname === item.path

        const isMatchesActive = item.id === 'matches' && location.pathname === '/matches'

        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            className={`bottom-nav__item ${isMatchesActive ? 'bottom-nav__item--active' : ''}`}
            onClick={() => navigate(item.path)}
            aria-label={item.label}
          >
            {item.icon(isMatchesActive)}
            <span className={`bottom-nav__label ${isMatchesActive ? 'bottom-nav__label--active' : ''}`}>
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
