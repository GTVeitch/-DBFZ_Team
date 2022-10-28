import React , { useState , useEffect } from 'react';
import { Switch ,  Route } from "react-router-dom"
import CharacterMenu from './components/CharacterMenu';
import Team from './components/Team';
import Comments from './components/Comments';
import NavBar from './components/NavBar';

function App() {

  const [characters, setCharacters] = useState([])
  const [teamChars, setTeamChars] = useState([])
  const [currentChar, setCurrentChar] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/characters")
    .then(r=>r.json())
    .then(chars => {
      setCharacters(chars)
      setCurrentChar(chars[0])
    })
  }, [])



  return (
    <>
      <NavBar/>

      <Switch>

        <Route path="/team">
          <Team teamChars={teamChars} setTeamChars={setTeamChars}/>
        </Route>

        <Route path="/comments">
          <Comments currentChar={currentChar}/>
        </Route>

      </Switch>

      <CharacterMenu characters={characters} teamChars={teamChars} setTeamChars={setTeamChars} setCurrentChar={setCurrentChar}/>

    </>
  );
}

export default App;
