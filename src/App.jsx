import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import RegisterPage from './pages/RegisterPage'
import WelcomePage from './pages/WelcomePage'
import PartnerPreferencesPage from './pages/PartnerPreferencesPage'
import MatchesPage from './pages/MatchesPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/partner-preferences" element={<PartnerPreferencesPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
