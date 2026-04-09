import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppLogo from '../components/AppLogo'
import './SplashPage.css'

export default function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/register'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash" id="splash-page">
      {/* Decorative background petals */}
      <div className="splash__bg-deco" aria-hidden="true">
        <div className="splash__petal splash__petal--tl" />
        <div className="splash__petal splash__petal--br" />
      </div>

      {/* Center content */}
      <div className="splash__content animate-scale-in">
        <AppLogo size="lg" />

        {/* Ring image illustration */}
        <div className="splash__rings animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background glow */}
            <ellipse cx="80" cy="90" rx="60" ry="20" fill="rgba(197,160,89,0.08)" />
            {/* Left ring shadow */}
            <ellipse cx="56" cy="92" rx="28" ry="6" fill="rgba(101,72,30,0.12)" />
            {/* Right ring shadow */}
            <ellipse cx="104" cy="92" rx="28" ry="6" fill="rgba(101,72,30,0.12)" />

            {/* Left wedding ring body */}
            <ellipse cx="56" cy="62" rx="28" ry="10" fill="none" stroke="#D4B578" strokeWidth="8" />
            <ellipse cx="56" cy="62" rx="28" ry="10" fill="none" stroke="#C5A059" strokeWidth="6" />

            {/* Ring band left */}
            <rect x="28" y="62" width="56" height="20" rx="4" fill="#C5A059" />
            <rect x="28" y="62" width="56" height="8" rx="4" fill="#D4B578" />

            {/* Right wedding ring body */}
            <ellipse cx="104" cy="58" rx="28" ry="10" fill="none" stroke="#D4B578" strokeWidth="8" />
            <ellipse cx="104" cy="58" rx="28" ry="10" fill="none" stroke="#C5A059" strokeWidth="6" />

            {/* Ring band right */}
            <rect x="76" y="58" width="56" height="24" rx="4" fill="#C5A059" />
            <rect x="76" y="58" width="56" height="8" rx="4" fill="#D4B578" />

            {/* Diamond on left ring */}
            <polygon points="56,38 63,50 56,62 49,50" fill="#F0E0B0" stroke="#C5A059" strokeWidth="1.5" />
            <polygon points="56,38 63,50 56,44" fill="#D4B578" />

            {/* Diamond on right ring */}
            <polygon points="104,34 111,46 104,58 97,46" fill="#F0E0B0" stroke="#C5A059" strokeWidth="1.5" />
            <polygon points="104,34 111,46 104,40" fill="#D4B578" />

            {/* Sparkles */}
            <circle cx="20" cy="30" r="2.5" fill="#C5A059" opacity="0.7" />
            <circle cx="140" cy="28" r="2" fill="#C5A059" opacity="0.6" />
            <circle cx="132" cy="48" r="1.5" fill="#C5A059" opacity="0.5" />
            <circle cx="16" cy="55" r="1.5" fill="#C5A059" opacity="0.5" />
            <line x1="20" y1="24" x2="20" y2="36" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="14" y1="30" x2="26" y2="30" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="140" y1="22" x2="140" y2="34" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="134" y1="28" x2="146" y2="28" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        <div className="splash__tagline animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <p>Modern matrimony for a modern generation.</p>
        </div>

        {/* Loading dots */}
        <div className="splash__dots animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <span className="splash__dot" style={{ animationDelay: '0s' }} />
          <span className="splash__dot" style={{ animationDelay: '0.3s' }} />
          <span className="splash__dot" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      <button
        id="splash-skip-btn"
        className="splash__skip"
        onClick={() => navigate('/register')}
      >
        Skip →
      </button>
    </div>
  )
}
