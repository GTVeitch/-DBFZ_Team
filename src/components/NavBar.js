import React from "react"
import { Link } from "react-router-dom"

function NavBar( { } ) {

    return(
        <>
            <div id="navBar">
                <a href='https://www.dustloop.com/w/Dragon_Ball_FighterZ'>Credit to Dustloop</a>
                <br></br>
                <Link to="/team">Team Builder</Link>
                <span>     </span>
                <Link to="/comments">Character Commenter</Link>
            </div>
        </>
    )


}

export default NavBar