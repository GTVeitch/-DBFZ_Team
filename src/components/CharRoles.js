import React from "react";

function CharRoles( { teamChars } ) {

    const charRoles = teamChars.map((char) => {
        const prePos = ((char.positions.point[0]==1)?"Point":(char.positions.mid[0]==1?"Mid":"Anchor"))
        return (
            <td>{prePos}</td>
        )
})

return (
    <>
    {charRoles}
    {teamChars[0]?null:<td/>}
    {teamChars[1]?null:<td/>}
    {teamChars[2]?null:<td/>}
    </>
    )

}


export default CharRoles