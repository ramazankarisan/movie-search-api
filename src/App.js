import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavbarTrends from './components/NavbarTrends';
import SearchBar from './components/SearchBar';
import TrendsResults from './components/TrendsResults';

function App() {

  return (
    <>

      <Header />
      <SearchBar />
      <NavbarTrends />
      <Routes>
        <Route path="/" element={<TrendsResults />} />

        <Route path="/:trend" element={<TrendsResults />} />

      </Routes>


      {/* results */}
    </>
  );
}

export default App;
