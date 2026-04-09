import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './MatchesPage.css'

const TABS = ['Matches For me', 'More', 'Near me', 'Near your PP']

// Realistic match data
const ALL_MATCHES = [
  { id: 1, name: 'Pradeep kumar Reddy', age: 25, height: "5'3\"", caste: 'Reddy', profession: 'Software Engineer', location: 'Hyderabad', online: true, photo: null, initials: 'PR' },
  { id: 2, name: 'Vijay Kumar Sharma', age: 28, height: "5'8\"", caste: 'Brahmin', profession: 'Doctor MD', location: 'Bengaluru', online: false, photo: null, initials: 'VK' },
  { id: 3, name: 'Arun Kiran Naidu', age: 30, height: "5'10\"", caste: 'Kapu', profession: 'Entrepreneur', location: 'Mumbai', online: true, photo: null, initials: 'AK' },
  { id: 4, name: 'Ramesh Chandra Rao', age: 27, height: "5'7\"", caste: 'Kamma', profession: 'Software Engineer', location: 'Hyderabad', online: false, photo: null, initials: 'RC' },
  { id: 5, name: 'Suresh Babu Goud', age: 32, height: "5'6\"", caste: 'Goud', profession: 'Government Officer', location: 'Delhi', online: true, photo: null, initials: 'SB' },
  { id: 6, name: 'Arjun Reddy Challa', age: 26, height: "5'9\"", caste: 'Reddy', profession: 'Data Scientist', location: 'Pune', online: true, photo: null, initials: 'AR' },
]

const AVATAR_COLORS = [
  ['#8B4513', '#DEB887'],
  ['#2E4057', '#A8C0D6'],
  ['#3D5A44', '#A8D5B0'],
  ['#5C3D2E', '#D4A88B'],
  ['#4A3728', '#C4956A'],
  ['#2C3E50', '#7FB3D3'],
]

function ProfileCard({ match, onFavorite }) {
  const [liked, setLiked] = useState(false)
  const [colors] = useState(AVATAR_COLORS[match.id % AVATAR_COLORS.length])

  const handleLike = (e) => {
    e.stopPropagation()
    setLiked(!liked)
    onFavorite && onFavorite(match.id, !liked)
  }

  return (
    <div className="profile-card animate-fade-up" id={`profile-card-${match.id}`}
      style={{ animationDelay: `${(match.id - 1) * 0.08}s` }}>
      {/* Photo / Avatar area */}
      <div className="profile-card__photo" style={{ background: `linear-gradient(160deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}>
        {/* Avatar initials */}
        <div className="profile-card__avatar">
          {match.initials}
        </div>
        {/* Online indicator */}
        {match.online && <div className="profile-card__online" title="Online now" />}
        {/* Gradient overlay */}
        <div className="profile-card__overlay" />
        {/* Name + details on photo */}
        <div className="profile-card__info">
          <h3 className="profile-card__name">{match.name} – {match.age}</h3>
          <p className="profile-card__details">{match.height} · {match.caste}-{match.profession}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="profile-card__actions">
        <button
          id={`action-decline-${match.id}`}
          className="profile-card__action profile-card__action--decline"
          title="Pass"
          aria-label="Decline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <button
          id={`action-profile-${match.id}`}
          className="profile-card__action profile-card__action--profile"
          title="View profile"
          aria-label="View profile"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </button>
        <button
          id={`action-chat-${match.id}`}
          className="profile-card__action profile-card__action--chat"
          title="Message"
          aria-label="Send message"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </button>
        <button
          id={`action-like-${match.id}`}
          className={`profile-card__action profile-card__action--like ${liked ? 'profile-card__action--liked' : ''}`}
          onClick={handleLike}
          title="Like"
          aria-label="Like"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? '#C5A059' : 'none'} stroke={liked ? '#C5A059' : 'currentColor'} strokeWidth="2" strokeLinecap="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
        <button
          id={`action-more-${match.id}`}
          className="profile-card__action profile-card__action--more"
          title="More options"
          aria-label="More options"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function MatchesPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="matches-page" id="matches-page">
      {/* Header */}
      <div className="matches-header">
        <div className="matches-header__top">
          <div className="matches-header__left">
            <div className="matches-header__menu">
              <span /><span /><span />
            </div>
            <h1 className="matches-header__title">Matches</h1>
          </div>
          <div className="matches-header__right">
            {/* Recent profiles strip */}
            <div className="matches-header__recent">
              {ALL_MATCHES.slice(0, 4).map((m, i) => (
                <div key={m.id} className="recent-avatar"
                  style={{ background: `linear-gradient(135deg, ${AVATAR_COLORS[i][0]}, ${AVATAR_COLORS[i][1]})`, zIndex: 4 - i }}>
                  {m.initials}
                </div>
              ))}
            </div>
            <button id="matches-filter-btn" className="matches-header__filter" aria-label="Filter matches">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="11" y1="18" x2="13" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Action row: Add photo + circles */}
        <div className="matches-header__actions">
          <button id="matches-add-photo-btn" className="add-photo-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
          <div className="matches-carousel-dots">
            {ALL_MATCHES.slice(0, 5).map((m, i) => (
              <div key={m.id} className="carousel-dot"
                style={{ background: `linear-gradient(135deg, ${AVATAR_COLORS[i][0]}, ${AVATAR_COLORS[i][1]})` }}>
                {m.initials}
              </div>
            ))}
          </div>
          <button id="matches-pref-btn" className="pref-edit-btn" onClick={() => navigate('/partner-preferences')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="matches-tabs" role="tablist">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              id={`matches-tab-${i}`}
              role="tab"
              aria-selected={activeTab === i}
              className={`matches-tab ${activeTab === i ? 'matches-tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Matches grid */}
      <div className="matches-grid">
        {ALL_MATCHES.map((match) => (
          <ProfileCard key={match.id} match={match} />
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
