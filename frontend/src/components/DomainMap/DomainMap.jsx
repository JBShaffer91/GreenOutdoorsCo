// frontend/src/components/DomainMap/DomainMap.jsx
import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// bundle the default marker icons for modern bundlers
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
})

export function DomainMap({ activities, onSelect }) {
  // center map on first activity (or fallback coords)
  const center = activities.length
    ? activities[0].coords
    : [37.7749, -122.4194]  // San Francisco fallback

  return (
    <MapContainer
      center={center}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {activities.map((act) => (
        <Marker
          key={act.name}
          position={act.coords}
          eventHandlers={{ click: () => onSelect(act) }}
        >
          <Popup>
            <strong>{act.name}</strong>
            <br />
            {act.gear?.join(', ')}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

DomainMap.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      name:   PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
      gear:   PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}
