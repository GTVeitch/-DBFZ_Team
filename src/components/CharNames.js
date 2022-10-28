import React from "react";

function CharNames ( { teamChars }) {

    const charNames = teamChars.map((char) => {
        const strengths = char.strengths.text.map((str) => str+"\n")
        return (
            <>
            <td key={char.name} title={strengths}>{char.name}</td>

            </>
        )
    })
    return (
        <>
            {charNames}
            {teamChars[0]?null:<td/>}
            {teamChars[1]?null:<td/>}
            {teamChars[2]?null:<td/>}
        </>
        )
}

export default CharNames