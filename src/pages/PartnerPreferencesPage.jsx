import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScreenHeader from '../components/ScreenHeader'
import MultiSelectChip from '../components/MultiSelectChip'
import './PartnerPreferencesPage.css'

const MARITAL_OPTIONS = ['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce', "Doesn't matter"]
const PHYSICAL_STATUS = ['Normal', 'Physically Challenged', "Doesn't matter"]
const EATING_OPTS = ['Veg', 'Non-Vegetarian', "Doesn't matter", 'Jain']
const SMOKING_OPTS = ['Non-Smoker', 'Occasional', "Doesn't matter"]
const DRINKING_OPTS = ["Doesn't drink", 'Occasional', "Doesn't matter"]
const DISEASE_OPTS = ['Any', 'None', "Doesn't matter"]
const DENOM_OPTS = ['Any', 'Reddy', 'Kamma', 'Kapu', 'Brahmin', 'Kshatriya', 'Vaishya', 'Other']
const EDU_OPTS = ['Any', "Bachelor's - Engineering", "Bachelor's - Arts", "Master's", 'MBA', 'MBBS', 'PhD']
const EMP_OPTS = ['Any', 'Software', 'Government', 'Business', 'Doctor', 'Engineer', 'Teaching']
const OCC_OPTS = ['Any', 'Software Engineer', 'Doctor', 'Engineer', 'Lawyer', 'Teacher', 'Entrepreneur']
const INCOME_OPTS = ['Any', '₹1–5 Lakh', '₹5–10 Lakh', '₹10–15 Lakh', '₹15–25 Lakh', '₹25+ Lakh']
const COUNTRY_OPTS = ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE', 'Any']
const STATE_OPTS = ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Maharashtra', 'Any']
const CITY_OPTS = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi', 'Any']
const CITIZEN_OPTS = ['Indian', 'NRI', 'Any']

const INIT = {
  ageMin: 22, ageMax: 35,
  heightMin: 150, heightMax: 180,
  maritalStatus: ['Never Married'],
  motherTongue: ['Telugu', 'English'],
  physicalStatus: ['Normal'],
  eatingHabits: ['Non-Vegetarian'],
  smokingHabits: ["Doesn't matter"],
  drinkingHabits: ["Doesn't matter"],
  religion: ['Hindu', 'Muslim'],
  disease: ['Any'],
  denomination: ['Any'],
  education: ["Bachelor's - Engineering"],
  employmentType: ["Bachelor's - Engineering"],
  occupation: ["Bachelor's - Engineering"],
  annualIncome: ["Bachelor's - Engineering"],
  countryLivingIn: ['Any'],
  stateLivingIn: [],
  residingCity: ['Any'],
  citizenship: ['Any'],
}

function RangeField({ label, min, max, valueMin, valueMax, onChangeMin, onChangeMax, format }) {
  return (
    <div className="range-field">
      <div className="range-field__header">
        <label className="form-label">{label}<span className="required">*</span></label>
        <span className="range-field__values">
          {format(valueMin)} – {format(valueMax)}
        </span>
      </div>
      <div className="range-field__track">
        <div
          className="range-field__fill"
          style={{
            left: `${((valueMin - min) / (max - min)) * 100}%`,
            width: `${((valueMax - valueMin) / (max - min)) * 100}%`,
          }}
        />
        <input type="range" min={min} max={max} value={valueMin}
          onChange={(e) => onChangeMin(+e.target.value)}
          className="range-field__input range-field__input--min"
          id={`range-min-${label.replace(/\s/g, '')}`}
        />
        <input type="range" min={min} max={max} value={valueMax}
          onChange={(e) => onChangeMax(+e.target.value)}
          className="range-field__input range-field__input--max"
          id={`range-max-${label.replace(/\s/g, '')}`}
        />
      </div>
      <div className="range-field__limits">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

function SimpleSelect({ label, id, options, value, onChange, required }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}{required && <span className="required">*</span>}</label>}
      <select id={id} className="form-select" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

export default function PartnerPreferencesPage() {
  const navigate = useNavigate()
  const [prefs, setPrefs] = useState(INIT)

  const updatePref = (key) => (val) => setPrefs((p) => ({ ...p, [key]: val }))

  const fmtAge = (v) => `${v} yrs`
  const fmtHeight = (v) => {
    const inches = Math.round(v / 2.54)
    const ft = Math.floor(inches / 12)
    const inch = inches % 12
    return `${ft}'${inch}"`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('mm_prefs', JSON.stringify(prefs))
    navigate('/matches')
  }

  return (
    <div className="page-scrollable pref-page" id="partner-prefs-page">
      <ScreenHeader title="Edit Partner Preference" />

      <form className="pref-form" onSubmit={handleSubmit} noValidate>
        {/* Age Range */}
        <RangeField
          label="Age (From 22 years)"
          min={18} max={60}
          valueMin={prefs.ageMin} valueMax={prefs.ageMax}
          onChangeMin={(v) => setPrefs((p) => ({ ...p, ageMin: Math.min(v, p.ageMax - 1) }))}
          onChangeMax={(v) => setPrefs((p) => ({ ...p, ageMax: Math.max(v, p.ageMin + 1) }))}
          format={fmtAge}
        />

        {/* Height Range */}
        <RangeField
          label="Height (From 5 ft ft)"
          min={120} max={220}
          valueMin={prefs.heightMin} valueMax={prefs.heightMax}
          onChangeMin={(v) => setPrefs((p) => ({ ...p, heightMin: Math.min(v, p.heightMax - 1) }))}
          onChangeMax={(v) => setPrefs((p) => ({ ...p, heightMax: Math.max(v, p.heightMin + 1) }))}
          format={fmtHeight}
        />

        {/* Marital Status */}
        <SimpleSelect label="Marital Status" id="pref-marital" options={MARITAL_OPTIONS} required
          value={prefs.maritalStatus[0] || ''} onChange={(v) => updatePref('maritalStatus')([v])} />

        {/* Mother Tongue */}
        <MultiSelectChip label="Mother Tongue" optionKey="language" required
          value={prefs.motherTongue} onChange={updatePref('motherTongue')} />

        {/* Physical Status */}
        <SimpleSelect label="Physical Status" id="pref-physical" options={PHYSICAL_STATUS} required
          value={prefs.physicalStatus[0] || ''} onChange={(v) => updatePref('physicalStatus')([v])} />

        {/* Eating Habits */}
        <MultiSelectChip label="Eating Habits" optionKey="eating" required
          value={prefs.eatingHabits} onChange={updatePref('eatingHabits')} />

        {/* Smoking Habits */}
        <MultiSelectChip label="Smoking Habits" optionKey="smoking" required
          value={prefs.smokingHabits} onChange={updatePref('smokingHabits')} />

        {/* Drinking Habits */}
        <MultiSelectChip label="Drinking Habits" optionKey="drinking" required
          value={prefs.drinkingHabits} onChange={updatePref('drinkingHabits')} />

        {/* Religion */}
        <MultiSelectChip label="Religion" optionKey="religion" required
          value={prefs.religion} onChange={updatePref('religion')} />

        {/* Disease */}
        <SimpleSelect label="Disease" id="pref-disease" options={DISEASE_OPTS}
          value={prefs.disease[0] || 'Any'} onChange={(v) => updatePref('disease')([v])} />

        {/* Denomination */}
        <SimpleSelect label="Denomination" id="pref-denom" options={DENOM_OPTS}
          value={prefs.denomination[0] || 'Any'} onChange={(v) => updatePref('denomination')([v])} />

        {/* Education */}
        <MultiSelectChip label="Education" optionKey="education" required
          value={prefs.education} onChange={updatePref('education')} />

        {/* Employment Type */}
        <MultiSelectChip label="Employment Type" optionKey="employment" required
          value={prefs.employmentType} onChange={updatePref('employmentType')} />

        {/* Occupation */}
        <MultiSelectChip label="Occupation" optionKey="occupation" required
          value={prefs.occupation} onChange={updatePref('occupation')} />

        {/* Annual Income */}
        <MultiSelectChip label="Annual Income" optionKey="eating" required
          value={prefs.annualIncome} onChange={updatePref('annualIncome')} />

        {/* Country Living In */}
        <SimpleSelect label="Country living in" id="pref-country" options={COUNTRY_OPTS}
          value={prefs.countryLivingIn[0] || 'Any'} onChange={(v) => updatePref('countryLivingIn')([v])} />

        {/* State Living In */}
        <MultiSelectChip label="State living in" optionKey="state"
          value={prefs.stateLivingIn} onChange={updatePref('stateLivingIn')} />

        {/* Residing City */}
        <MultiSelectChip label="Residing City" optionKey="city"
          value={prefs.residingCity} onChange={updatePref('residingCity')} />

        {/* Citizenship */}
        <SimpleSelect label="Citizenship" id="pref-citizen" options={CITIZEN_OPTS}
          value={prefs.citizenship[0] || 'Any'} onChange={(v) => updatePref('citizenship')([v])} />

        {/* Mother Tongue checkboxes section */}
        <div className="pref-lang-section">
          <label className="form-label">Mother Tongue (Select all)<span className="required">*</span></label>
          {['Telugu', 'English', 'Hindi', 'Kannada', 'Malayalam', 'Tamil', 'Odia', 'Bhojpuri', 'Marathi'].map((lang) => (
            <label key={lang} className="checkbox-label">
              <input
                type="checkbox"
                id={`lang-${lang.toLowerCase()}`}
                checked={prefs.motherTongue.includes(lang)}
                onChange={() => {
                  const updated = prefs.motherTongue.includes(lang)
                    ? prefs.motherTongue.filter((l) => l !== lang)
                    : [...prefs.motherTongue, lang]
                  updatePref('motherTongue')(updated)
                }}
              />
              {lang}
            </label>
          ))}
        </div>

        <div className="pref-footer-links">
          <a href="#">Contact Us</a> | <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Do Not Sell My Info</a>
        </div>

        <button
          id="save-pref-btn"
          type="submit"
          className="btn btn-primary"
          style={{ margin: '0 0 16px 0' }}
        >
          Save &amp; Continue
        </button>
      </form>
    </div>
  )
}
