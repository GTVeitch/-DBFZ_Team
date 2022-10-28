import React from "react";

function RemoveButtons( { teamChars , setTeamChars } ) {
    const removeButtons = teamChars.map((char) => {
        function handleRemove(e){
            setTeamChars(teamChars.filter((char)=> char.id != e.target.id))
        }
        return (
            <td><button onClick={handleRemove} id={char.id}>Remove</button></td>
        )
    })

    return removeButtons
}

export default RemoveButtons