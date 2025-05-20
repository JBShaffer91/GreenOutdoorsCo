// frontend/src/components/DomainDetailPanel/DomainDetailPanel.jsx
import React from 'react'
import PropTypes from 'prop-types'

export function DomainDetailPanel({ activity }) {
  if (!activity) return null

  const { name, icon, gear, safetyTip } = activity

  return (
    <aside className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        {icon && <img src={icon} alt={`${name} icon`} className="h-12 w-12" />}
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>
      {gear && (
        <div className="mt-4">
          <h3 className="font-semibold">Recommended Gear</h3>
          <ul className="list-disc list-inside">
            {gear.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
      {safetyTip && (
        <p className="mt-4 italic text-sm text-gray-600">“{safetyTip}”</p>
      )}
    </aside>
  )
}

DomainDetailPanel.propTypes = {
  activity: PropTypes.shape({
    name:      PropTypes.string,
    icon:      PropTypes.string,
    gear:      PropTypes.arrayOf(PropTypes.string),
    safetyTip: PropTypes.string,
  }),
}
