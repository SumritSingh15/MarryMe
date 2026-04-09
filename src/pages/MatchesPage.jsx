import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './MatchesPage.css'

const TABS = [
  { label: 'Matches For me', count: null },
  { label: 'More', count: '99+' },
  { label: 'Near me', count: '99+' },
]

const ALL_MATCHES = [
  {
    id: 1,
    name: 'Pradeep kumar Reddy',
    age: 25,
    height: '5.3',
    caste: 'Reddy',
    profession: 'software',
    mmId: 'MM0000001',
    online: true,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    initials: 'PR',
    bgColor: '#b5a898',
  },
  {
    id: 2,
    name: 'Vijay Kumar Sharma',
    age: 28,
    height: '5.8',
    caste: 'Brahmin',
    profession: 'Doctor MD',
    mmId: 'MM0000002',
    online: false,
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    initials: 'VK',
    bgColor: '#8a9e8c',
  },
  {
    id: 3,
    name: 'Arun Kiran Naidu',
    age: 30,
    height: '5.10',
    caste: 'Kapu',
    profession: 'Entrepreneur',
    mmId: 'MM0000003',
    online: true,
    photo: 'https://randomuser.me/api/portraits/men/58.jpg',
    initials: 'AK',
    bgColor: '#a08070',
  },
  {
    id: 4,
    name: 'Ramesh Chandra Rao',
    age: 27,
    height: '5.7',
    caste: 'Kamma',
    profession: 'Software Engineer',
    mmId: 'MM0000004',
    online: false,
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
    initials: 'RC',
    bgColor: '#7a8fa0',
  },
  {
    id: 5,
    name: 'Suresh Babu Goud',
    age: 32,
    height: '5.6',
    caste: 'Goud',
    profession: 'Govt Officer',
    mmId: 'MM0000005',
    online: true,
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
    initials: 'SG',
    bgColor: '#a09070',
  },
]

/* Story circles – first one is "Your Story" (+), rest are match avatars */
const STORY_MATCHES = ALL_MATCHES.slice(0, 5)

function ProfileCard({ match }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="profile-card" id={`profile-card-${match.id}`}>
      {/* Drag handle */}
      <div className="profile-card__handle" aria-hidden="true" />

      {/* Photo */}
      <div className="profile-card__photo-wrap">
        {!imgError ? (
          <img
            src={match.photo}
            alt={match.name}
            className="profile-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="profile-card__img-fallback"
            style={{ background: `linear-gradient(180deg, ${match.bgColor} 0%, #d4c4b4 100%)` }}
          >
            <span className="profile-card__initials-big">{match.initials}</span>
          </div>
        )}
      </div>

      {/* Info – below photo, white background */}
      <div className="profile-card__info">
        <div className="profile-card__handle-bar" />
        <h2 className="profile-card__name">
          {match.name}
          <span className="profile-card__age"> -{match.age}</span>
        </h2>
        <p className="profile-card__mm-id">{match.mmId}</p>
        <p className="profile-card__details">
          {match.height} &nbsp;·&nbsp; {match.caste} ·{match.profession}
        </p>
      </div>
    </div>
  )
}

export default function MatchesPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="matches-page" id="matches-page">

      {/* ── Top Header ── */}
      <div className="matches-topbar">
        <div className="matches-topbar__left">
          {/* Hamburger only */}
          <button id="matches-hamburger" className="topbar-icon-btn" aria-label="Menu">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect width="18" height="2" rx="1" fill="#1C1814" />
              <rect y="6" width="18" height="2" rx="1" fill="#1C1814" />
              <rect y="12" width="18" height="2" rx="1" fill="#1C1814" />
            </svg>
          </button>
          <h1 className="matches-topbar__title">Matches</h1>
        </div>

        {/* Bell notification */}
        <button id="matches-bell-btn" className="topbar-icon-btn" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C1814" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
      </div>

      {/* ── Story Row ── */}
      <div className="story-row">
        {/* "+" Your Story + vertical divider – grouped together */}
        <div className="story-add-wrap">
          <div className="story-item">
            <div className="story-add-btn" id="story-add-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <span className="story-label">Your Story</span>
          </div>
          {/* Vertical divider */}
          <div className="story-divider" />
        </div>

        {/* Story circles for each match */}
        {STORY_MATCHES.map((m, i) => (
          <div key={m.id} className="story-item">
            <div className={`story-circle ${i === 0 ? 'story-circle--active' : 'story-circle--empty'}`}>
              {i === 0 ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="story-circle__img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling && (e.target.nextSibling.style.display = 'flex')
                  }}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* ── Tab Bar – pill style ── */}
      <div className="matches-tabs" role="tablist">
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            id={`matches-tab-${i}`}
            role="tab"
            aria-selected={activeTab === i}
            className={`matches-tab ${activeTab === i ? 'matches-tab--active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}{tab.count ? ` (${tab.count})` : ''}
          </button>
        ))}
      </div>

      {/* ── Profile Cards Feed ── */}
      <div className="matches-feed">
        {ALL_MATCHES.map((match) => (
          <ProfileCard key={match.id} match={match} />
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
