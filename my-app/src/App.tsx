import React from 'react';
import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import { Container, Wrapper } from './styles';

const Movies = React.lazy(() => import('./pages/movies/movies'));
const Search = React.lazy(() => import('./pages/search/search'));
const Shames = React.lazy(() => import ('./pages/shames/shames'));
const Favourites = React.lazy(() => import ('./pages/favourites/favourites'));
const Footer = React.lazy(() => import('./components/footer/footer'));

function App() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Routes>
            <Route index path="/movies" element={<React.Suspense fallback={<>...</>}><Movies /></React.Suspense>} />
            <Route path="/favourites" element={<React.Suspense fallback={<>...</>}><Favourites /></React.Suspense>} />
            <Route path="/shames" element={<React.Suspense fallback={<>...</>}><Shames /></React.Suspense>} />
            <Route path="/search" element={<React.Suspense fallback={<>...</>}><Search /></React.Suspense>} />
        </Routes>
      </Wrapper>
      <React.Suspense fallback={<>...</>}><Footer /></React.Suspense>
    </Container>
  );
}

export default App;
