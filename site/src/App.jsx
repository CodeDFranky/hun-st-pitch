import { useState } from 'react'
import DarkLuxe from './variants/DarkLuxe'
import EditorialPremium from './variants/EditorialPremium'
import WarmModern from './variants/WarmModern'
import './index.css'
import './switcher.css'

const variants = [
  { id: 'dark-luxe', label: 'Dark Luxe', Component: DarkLuxe },
  { id: 'editorial', label: 'Editorial', Component: EditorialPremium },
  { id: 'warm-modern', label: 'Warm Modern', Component: WarmModern },
]

export default function App() {
  const [active, setActive] = useState('dark-luxe')
  const current = variants.find(v => v.id === active)
  const isDark = active === 'dark-luxe'

  return (
    <>
      <current.Component />
      <nav className={`variant-switcher${isDark ? ' variant-switcher--dark' : ' variant-switcher--light'}`}>
        {variants.map(v => (
          <button
            key={v.id}
            className={`variant-btn${active === v.id ? ' variant-btn--active' : ''}`}
            onClick={() => {
              setActive(v.id)
              window.scrollTo({ top: 0, behavior: 'instant' })
            }}
          >
            {v.label}
          </button>
        ))}
      </nav>
    </>
  )
}
