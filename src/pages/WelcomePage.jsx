import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppLogo from '../components/AppLogo'
import './WelcomePage.css'

export default function WelcomePage() {
  const navigate = useNavigate()
  const [name, setName] = useState('Priyanka Reddy Divya')

  useEffect(() => {
    const profile = localStorage.getItem('mm_profile')
    if (profile) {
      const p = JSON.parse(profile)
      setName(p.name || `${p.firstName} ${p.lastName}`)
    }
  }, [])

  return (
    <div className="welcome-page" id="welcome-page">
      {/* Decorative top arc */}
      <div className="welcome-page__top-deco" aria-hidden="true" />

      {/* Logo */}
      <div className="welcome-page__logo animate-fade-in">
        <AppLogo size="md" />
      </div>

      {/* Rings hero image */}
      <div className="welcome-page__hero animate-scale-in" style={{ animationDelay: '0.2s' }}>
        <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Soft background glow */}
          <ellipse cx="130" cy="140" rx="100" ry="40" fill="rgba(197,160,89,0.06)" />

          {/* Left ring – outer */}
          <circle cx="95" cy="95" r="60" stroke="#C5A059" strokeWidth="5" fill="none" />
          {/* Left ring – inner decorative */}
          <circle cx="95" cy="95" r="52" stroke="#D4B578" strokeWidth="1.5" strokeDasharray="6 8" fill="none" opacity="0.6" />
          {/* Left ring – stone band highlight */}
          <path d="M63 72 Q95 58 127 72" stroke="#E8CD8A" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Right ring – outer */}
          <circle cx="165" cy="105" r="60" stroke="#C5A059" strokeWidth="5" fill="none" />
          {/* Right ring – inner decorative */}
          <circle cx="165" cy="105" r="52" stroke="#D4B578" strokeWidth="1.5" strokeDasharray="6 8" fill="none" opacity="0.6" />
          {/* Right ring – stone band highlight */}
          <path d="M133 82 Q165 68 197 82" stroke="#E8CD8A" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Diamond on left ring */}
          <polygon points="95,56 104,74 95,90 86,74" fill="#F8EBC0" stroke="#C5A059" strokeWidth="1.5" />
          <polygon points="95,56 104,74 95,64" fill="#E8CD8A" />
          <line x1="86" y1="74" x2="104" y2="74" stroke="#C5A059" strokeWidth="1" opacity="0.5" />

          {/* Diamond on right ring */}
          <polygon points="165,64 174,82 165,98 156,82" fill="#F8EBC0" stroke="#C5A059" strokeWidth="1.5" />
          <polygon points="165,64 174,82 165,74" fill="#E8CD8A" />
          <line x1="156" y1="82" x2="174" y2="82" stroke="#C5A059" strokeWidth="1" opacity="0.5" />

          {/* Sparkles */}
          <g opacity="0.8">
            <circle cx="32" cy="50" r="3" fill="#C5A059" />
            <line x1="32" y1="43" x2="32" y2="57" stroke="#C5A059" strokeWidth="1.2" />
            <line x1="25" y1="50" x2="39" y2="50" stroke="#C5A059" strokeWidth="1.2" />
            <circle cx="228" cy="60" r="2.5" fill="#C5A059" />
            <line x1="228" y1="54" x2="228" y2="66" stroke="#C5A059" strokeWidth="1.2" />
            <line x1="222" y1="60" x2="234" y2="60" stroke="#C5A059" strokeWidth="1.2" />
            <circle cx="40" cy="130" r="2" fill="#C5A059" opacity="0.6" />
            <circle cx="220" cy="140" r="2" fill="#C5A059" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Welcome card */}
      <div className="welcome-card animate-fade-up" style={{ animationDelay: '0.35s' }}>
        <h1 className="welcome-card__title">Welcome</h1>
        <h2 className="welcome-card__name">{name}</h2>
        <p className="welcome-card__desc">
          Before you start your journey,<br/>
          set Partner Preferences for better<br/>
          matches
        </p>
        <button
          id="set-partner-pref-btn"
          className="btn btn-primary"
          onClick={() => navigate('/partner-preferences')}
        >
          Set Partner Preferences
        </button>
        <button
          id="skip-pref-btn"
          className="welcome-card__skip"
          onClick={() => navigate('/matches')}
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}
