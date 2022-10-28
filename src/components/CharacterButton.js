import React from "react"

function CharacterButton( { image , teamChars , setTeamChars , char , setCurrentChar} ) {
    function handleClick(e) {
        e.preventDefault()
        let newArray = teamChars
        setCurrentChar(char)

        teamChars[0] ? (teamChars[1] ? (teamChars[2]? (newArray=newArray): newArray[2]=char): newArray[1]=char ) :(newArray = [char])


        setTeamChars([...new Set(newArray)])

    }

    return <img src={image} alt="" onClick={handleClick}/>
}

export default CharacterButton;