import React from 'react'
import PropTypes from 'prop-types'

// you can tweak these colors to match your Tailwind theme
const domains = ['Air', 'Land', 'Sea']

export function Hero({ domain, onDomainChange }) {
  return (
    <header className="hero-bg relative h-screen flex flex-col justify-center items-center text-white text-center px-4">
      {/* semi-opaque overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-2xl space-y-6">
        <h1 className="font-heading uppercase tracking-widest text-6xl">
          {domain} Conditions
        </h1>
        <p className="text-lg">
          Real-time weather & recommendations for your next{' '}
          {domain.toLowerCase()} adventure.
        </p>
        <div className="flex space-x-4 justify-center">
          {domains.map(d => (
            <button
              key={d}
              onClick={() => onDomainChange(d)}
              className={`
                px-5 py-2 uppercase font-heading tracking-wide rounded-full transition-colors
                ${
                  domain === d
                    ? 'bg-militaryGreen text-white relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-signalRed'
                    : 'bg-charcoal text-desertTan hover:bg-slate hover:text-white'
                }
              `}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

Hero.propTypes = {
  domain: PropTypes.oneOf(domains).isRequired,
  onDomainChange: PropTypes.func.isRequired,
}
