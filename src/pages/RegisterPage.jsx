import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScreenHeader from '../components/ScreenHeader'
import './RegisterPage.css'

const MARITAL_STATUS = ['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce']
const HEIGHTS = ['4\'0"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"']
const EDUCATION = ['High School', 'Diploma', "Bachelor's - Engineering", "Bachelor's - Arts", "Bachelor's - Commerce", "Bachelor's - Science", 'MBA', 'MBBS', "Master's", 'PhD', 'Other']
const JOB_TITLES = ['Software Engineer', 'Doctor / Physician', 'Doctor MD / MS', 'Lawyer', 'Accountant', 'Entrepreneur', 'Government Employee', 'Teacher / Professor', 'Other']
const INCOME = ['Below ₹1 Lakh', '₹1–2 Lakh', '₹2–5 Lakh', '₹5–7 Lakh', '₹7–10 Lakh', '₹10–15 Lakh', '₹15–20 Lakh', '₹20–30 Lakh', '₹30+ Lakh']
const CITIES = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi', 'Pune', 'Kolkata', 'Ahmedabad', 'Other']
const CREATING_FOR = ['Son', 'Daughter', 'Brother', 'Sister', 'Relative']
const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const YEARS = Array.from({ length: 50 }, (_, i) => String(2005 - i))
const COUNTRY_CODES = ['+91', '+1', '+44', '+971', '+61', '+65']

const INIT = {
  creatingFor: '',
  firstName: '', lastName: '',
  email: '',
  countryCode: '+91', phone: '',
  dobDay: '', dobMonth: '', dobYear: '',
  height: '',
  maritalStatus: '',
  currentLocation: '',
  highestEducation: '',
  jobTitle: '',
  annualIncome: '',
}

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.creatingFor) errs.creatingFor = 'Please select'
    if (!form.firstName.trim()) errs.firstName = 'Required'
    if (!form.lastName.trim()) errs.lastName = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required'
    if (!form.phone.trim() || form.phone.length < 8) errs.phone = 'Valid number required'
    if (!form.dobDay || !form.dobMonth || !form.dobYear) errs.dob = 'Complete date required'
    if (!form.height) errs.height = 'Required'
    if (!form.maritalStatus) errs.maritalStatus = 'Required'
    if (!form.currentLocation.trim()) errs.currentLocation = 'Required'
    if (!form.highestEducation) errs.highestEducation = 'Required'
    if (!form.annualIncome) errs.annualIncome = 'Required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      localStorage.setItem('mm_profile', JSON.stringify({ ...form, name: `${form.firstName} ${form.lastName}` }))
      navigate('/welcome')
    }
  }

  const Field = ({ id, label, error, children }) => (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}<span className="required">*</span></label>}
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  )

  return (
    <div className="page-scrollable reg-page" id="register-page">
      <ScreenHeader
        title="Let's build your Profile"
        subtitle="You're creating profile for*"
      />

      {/* Creating For */}
      <div className="reg-creating-for" id="creating-for-section">
        {CREATING_FOR.map((opt) => (
          <label key={opt} className={`creating-for__opt ${form.creatingFor === opt ? 'creating-for__opt--active' : ''}`}>
            <input
              type="radio"
              name="creatingFor"
              value={opt}
              checked={form.creatingFor === opt}
              onChange={set('creatingFor')}
              id={`creating-for-${opt.toLowerCase()}`}
            />
            <span className="creating-for__check" />
            {opt}
          </label>
        ))}
        {errors.creatingFor && <span className="field-error">{errors.creatingFor}</span>}
      </div>

      <form className="reg-form" onSubmit={handleSubmit} noValidate>
        {/* Name Row */}
        <div className="form-row">
          <Field id="firstName" label="First Name" error={errors.firstName}>
            <input id="firstName" type="text" className={`form-input ${errors.firstName ? 'input-error' : ''}`} placeholder="First Name" value={form.firstName} onChange={set('firstName')} />
          </Field>
          <Field id="lastName" label="Last Name" error={errors.lastName}>
            <input id="lastName" type="text" className={`form-input ${errors.lastName ? 'input-error' : ''}`} placeholder="Last Name" value={form.lastName} onChange={set('lastName')} />
          </Field>
        </div>

        {/* Email */}
        <Field id="email" label="Email Address" error={errors.email}>
          <input id="email" type="email" className={`form-input ${errors.email ? 'input-error' : ''}`} placeholder="your@email.com" value={form.email} onChange={set('email')} />
        </Field>

        {/* Phone */}
        <div className="form-group">
          <label className="form-label">Mobile Number<span className="required">*</span></label>
          <div className="form-row-3">
            <select id="country-code" className="form-select" value={form.countryCode} onChange={set('countryCode')}>
              {COUNTRY_CODES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <div style={{ gridColumn: 'span 2' }}>
              <input id="phone" type="tel" className={`form-input ${errors.phone ? 'input-error' : ''}`} placeholder="Mobile Number" value={form.phone} onChange={set('phone')} />
            </div>
          </div>
          <p className="field-hint">Matches will contact you on this number</p>
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label className="form-label">Date of Birth<span className="required">*</span></label>
          <div className="form-row">
            <select id="dob-day" className="form-select" value={form.dobDay} onChange={set('dobDay')}>
              <option value="">Day</option>
              {DAYS.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select id="dob-month" className="form-select" value={form.dobMonth} onChange={set('dobMonth')}>
              <option value="">Month</option>
              {MONTHS.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select id="dob-year" className="form-select" value={form.dobYear} onChange={set('dobYear')}>
              <option value="">Year</option>
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
          {errors.dob && <span className="field-error">{errors.dob}</span>}
        </div>

        {/* Date of Birth row is 3 columns, override */}
        <style>{`.reg-form .form-row:has(#dob-day) { grid-template-columns: 1fr 1fr 1fr; }`}</style>

        {/* Height */}
        <Field id="height" label="Height" error={errors.height}>
          <select id="height" className={`form-select ${errors.height ? 'input-error' : ''}`} value={form.height} onChange={set('height')}>
            <option value="">4'9" FT</option>
            {HEIGHTS.map((h) => <option key={h}>{h}</option>)}
          </select>
        </Field>

        {/* Marital Status + Location */}
        <div className="form-row">
          <Field id="maritalStatus" label="Marital Status" error={errors.maritalStatus}>
            <select id="maritalStatus" className={`form-select ${errors.maritalStatus ? 'input-error' : ''}`} value={form.maritalStatus} onChange={set('maritalStatus')}>
              <option value="">Never Married</option>
              {MARITAL_STATUS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field id="currentLocation" label="Current Location" error={errors.currentLocation}>
            <select id="currentLocation" className={`form-select ${errors.currentLocation ? 'input-error' : ''}`} value={form.currentLocation} onChange={set('currentLocation')}>
              <option value="">Hyderabad</option>
              {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
        </div>

        {/* Education + Job Title */}
        <div className="form-row">
          <Field id="highestEducation" label="Highest Education" error={errors.highestEducation}>
            <select id="highestEducation" className={`form-select ${errors.highestEducation ? 'input-error' : ''}`} value={form.highestEducation} onChange={set('highestEducation')}>
              <option value="">MBBS</option>
              {EDUCATION.map((e) => <option key={e}>{e}</option>)}
            </select>
          </Field>
          <div className="form-group">
            <label htmlFor="jobTitle" className="form-label">Job Title</label>
            <select id="jobTitle" className="form-select" value={form.jobTitle} onChange={set('jobTitle')}>
              <option value="">Doctor MD / MS</option>
              {JOB_TITLES.map((j) => <option key={j}>{j}</option>)}
            </select>
          </div>
        </div>

        {/* Annual Income */}
        <Field id="annualIncome" label="Annual Income" error={errors.annualIncome}>
          <select id="annualIncome" className={`form-select ${errors.annualIncome ? 'input-error' : ''}`} value={form.annualIncome} onChange={set('annualIncome')}>
            <option value="">₹10 Lakh to 15 Lakh</option>
            {INCOME.map((i) => <option key={i}>{i}</option>)}
          </select>
        </Field>

        <button id="register-next-btn" type="submit" className="btn btn-primary mt-4">
          Next
        </button>
      </form>
    </div>
  )
}
