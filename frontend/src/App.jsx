import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import NavBar from './navbar/NavBar';
import Section from './pages/Section';
import AdminPage from './pages/Admin';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);


  useEffect(() => {
    document.body.style.overflow = showAdmin ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAdmin]);

  return (
    <Router>
      <div className="relative pt-5">
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
