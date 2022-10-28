import React , { useState , useEffect } from 'react';
import CharacterMenu from './components/CharacterMenu';
import Team from './components/Team';
import Comments from './components/Comments';
import NavBar from './components/NavBar';

function App() {

  const [characters, setCharacters] = useState([])
  const [teamChars, setTeamChars] = useState([])
  const [currentChar, setCurrentChar] = useState([])
  const [teamBuilder, setTeamBuilder] = useState(true)

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
      <NavBar teamBuilder={teamBuilder} setTeamBuilder={setTeamBuilder}/>
      {teamBuilder?<Team teamChars={teamChars} setTeamChars={setTeamChars}/>:<Comments currentChar={currentChar}/>}
      <CharacterMenu characters={characters} teamChars={teamChars} setTeamChars={setTeamChars} setCurrentChar={setCurrentChar}/>

    </>
  );
}

export default App;
