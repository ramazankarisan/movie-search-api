import './App.css';
import Header from './components/Header';
import NavbarTrends from './components/NavbarTrends';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <>
      {/* header */}
      <Header />
      {/* searchbar */}
      <SearchBar />
      {/* trends navbar */}
      <NavbarTrends />
      {/* results */}
    </>
  );
}

export default App;
