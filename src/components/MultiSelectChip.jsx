import { useState } from 'react'
import './MultiSelectChip.css'

const OPTIONS_MAP = {
  religion: ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Parsi', 'Jewish', 'Any'],
  language: ['Telugu', 'English', 'Hindi', 'Kannada', 'Malayalam', 'Tamil', 'Odia', 'Bhojpuri', 'Marathi'],
  denomination: ['Any', 'Reddy', 'Kamma', 'Kapu', 'Brahmin', 'Kshatriya', 'Vaishya', 'Other'],
  education: ['Any', "Bachelor's - Engineering", "Bachelor's - Arts", "Master's", 'MBA', 'MBBS', 'PhD', 'Diploma'],
  employment: ['Any', 'Software', 'Doctor', 'Engineer', 'Government', 'Business', 'Teaching', 'Other'],
  occupation: ['Any', 'Software Engineer', 'Doctor', 'Engineer', 'Lawyer', 'Accountant', 'Teacher', 'Entrepreneur'],
  eating: ['Veg', 'Non-Vegetarian', "Doesn't matter", 'Jain', 'Eggetarian'],
  smoking: ['Non-Smoker', 'Occasional', "Doesn't matter"],
  drinking: ["Doesn't drink", 'Occasional', "Doesn't matter"],
  country: ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE', 'Any'],
  state: ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Maharashtra', 'Delhi', 'Any'],
  city: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi', 'Pune', 'Any'],
  citizenship: ['Indian', 'NRI', 'Any'],
}

export default function MultiSelectChip({ label, optionKey, value = [], onChange, required }) {
  const [open, setOpen] = useState(false)
  const options = OPTIONS_MAP[optionKey] || []

  const toggle = (opt) => {
    if (value.includes(opt)) {
      onChange(value.filter((v) => v !== opt))
    } else {
      onChange([...value, opt])
    }
  }

  const remove = (opt) => onChange(value.filter((v) => v !== opt))

  return (
    <div className="msc">
      {label && (
        <label className="form-label">
          {label}{required && <span className="required">*</span>}
        </label>
      )}
      <div className="msc__chips">
        {value.map((v) => (
          <span key={v} className="chip">
            {v}
            <button type="button" className="chip-close" onClick={() => remove(v)}>×</button>
          </span>
        ))}
        <button
          type="button"
          id={`msc-add-${optionKey}`}
          className="msc__add-btn"
          onClick={() => setOpen(!open)}
        >
          {value.length === 0 ? 'Select…' : '+ Add'}
        </button>
      </div>
      {open && (
        <div className="msc__dropdown" id={`msc-dropdown-${optionKey}`}>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`msc__option ${value.includes(opt) ? 'msc__option--selected' : ''}`}
              onClick={() => toggle(opt)}
            >
              {opt}
              {value.includes(opt) && ' ✓'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
