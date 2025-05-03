import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import NavBar from './navbar/NavBar';
import Section from './pages/Section';
import AdminPage from './pages/Admin';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <Router>
      <div className="relative p-5">
        <NavBar onCreateClick={() => setShowAdmin(true)} />
        <Section />

        {showAdmin && (
          <div className="absolute top-0 left-0 w-full h-screen z-50 custombg">
          <AdminPage onClose={() => setShowAdmin(false)} />
        </div>
        
        )}
      </div>
    </Router>
  );
}

export default App;
