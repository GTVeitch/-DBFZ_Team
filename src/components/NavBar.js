import React from "react"

function NavBar( { teamBuilder, setTeamBuilder } ) {

    function handleClick(e) {
        e.preventDefault()
        setTeamBuilder(!teamBuilder)
    }

    return(
        <>
            <div id="navBar">
                <a href='https://www.dustloop.com/w/Dragon_Ball_FighterZ'>Credit to Dustloop</a>
                <div onClick={handleClick}>Click me -{'>'}{teamBuilder? "    Team Builder": "    Character Commenter"}</div>
            </div>
        </>
    )


}

export default NavBar