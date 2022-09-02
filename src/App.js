import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Characters from './components/characters';
function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch('http://rickandmortyapi.com/api/character')
    const charactersApi = await api.json();
    setCharacters(charactersApi.results)
  }
  console.log(characters)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty API</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={logo} className="App-logo" alt="logo"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personaje</button>

          </>
        )}


      </header>
    </div>
  );
}

export default App;
