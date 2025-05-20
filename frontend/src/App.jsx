import React, { useState } from 'react';
import { Navbar }           from './components/Navbar/Navbar.jsx';
import { Hero }             from './components/Hero/Hero.jsx';
import { DomainMap }        from './components/DomainMap/DomainMap.jsx';
import { DomainDetailPanel} from './components/DomainDetailPanel/DomainDetailPanel.jsx';
import activities            from './data/activities.json';

export default function App() {
  const [domain, setDomain]           = useState('Land');
  const [selectedActivity, setSelect] = useState(null);
  const spots = activities.filter(a => a.category === domain);

  return (
    <>
      <Navbar domain={domain} onDomainChange={setDomain}/>
      <Hero   domain={domain} onDomainChange={setDomain}/>
      <main className="p-4">
        <DomainMap  activities={spots} onSelect={setSelect}/>
        <DomainDetailPanel activity={selectedActivity}/>
      </main>
    </>
  );
}
