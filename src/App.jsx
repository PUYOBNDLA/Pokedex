import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SearchedPokemon from './pages/SearchedPokemon.jsx';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:pokemon"} element={<SearchedPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
