import React from "react"
import CharacterButton from "./CharacterButton";

function CharacterMenu( { characters , teamChars , setTeamChars , setCurrentChar} ) {

    const buttons = characters.map((char) => {
        return (
            <>
                <CharacterButton key={char.id} char={char} image={char.images.pixelImage} teamChars={teamChars} setTeamChars={setTeamChars} setCurrentChar={setCurrentChar}/>
                {char.id === 15 ? <br/>: null}
                {char.id === 29? <br/> : null}
            </>
                )
    })

    // function patch(e) {
    //     e.preventDefault()
    //     const filler = [ {
    //                  name: "first",
    //                  content : "first",
    //                  votes: 0,
    //                  id: 1
    //                      } ]

    //       characters.map((char) => {
    //       fetch(`http://localhost:3000/characters/${char.id}`, {
    //           method : 'PATCH',
    //           headers : { "content-type" : "application/json"},
    //           body : JSON.stringify({ ...char,
    //             comments : filler})
    //         })
    //       })
    // }<button onClick={(e) => patch(e)}> GYOUBHJIUHYUG</button>

    return(
        <div className="buttonContainer">
            <br></br>
            {buttons}
        </div>
    )

}

export default CharacterMenu;