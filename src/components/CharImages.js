import React from "react";

function CharImages ( { teamChars } ){

    const charImages = teamChars.map((char) => {
        const weaknesses = char.weaknesses.text.map((str) => str+"\n")
        return (
            <td key={char.images.mainImage} title={weaknesses}><img src={char.images.mainImage} className="teamImages" alt=""/></td>
        )

    })
    return (
        <>
            {charImages}
            {teamChars[0]?null:<td/>}
            {teamChars[1]?null:<td/>}
            {teamChars[2]?null:<td/>}
        </>
    )
}

export default CharImages