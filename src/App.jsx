import { useEffect, useState } from 'react';
import Home from './components/Home.jsx';
import MovieDialog from './components/MovieDialog.jsx';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (!selectedMovie && !loginOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setSelectedMovie(null);
        setLoginOpen(false);
      }
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedMovie, loginOpen]);

  return (
    <div className="app-shell">
      <Home onLogin={() => setLoginOpen(true)} onSelectMovie={setSelectedMovie} />
      {(selectedMovie || loginOpen) && (
        <MovieDialog
          movie={selectedMovie}
          loginOpen={loginOpen}
          onClose={() => { setSelectedMovie(null); setLoginOpen(false); }}
        />
      )}
    </div>
  );
}
