import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Movie from './pages/Movie';
import { FavoritesProvider } from './contexts/FavoritesContext';

function App() {
  return (
    <>
      <Router>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </FavoritesProvider>
      </Router>
    </>
  )
}

export default App
