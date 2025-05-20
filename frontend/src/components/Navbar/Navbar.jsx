// frontend/src/components/Navbar/Navbar.jsx
import React from 'react';

export function Navbar({ domain, onDomainChange }) {
  return (
    <nav className="p-4 bg-green-800 text-white flex space-x-4">
      {['Air','Land','Sea'].map(d => (
        <button
          key={d}
          onClick={() => onDomainChange(d)}
          className={domain===d ? 'underline' : ''}
        >
          {d}
        </button>
      ))}
    </nav>
  );
}
