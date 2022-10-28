import React from "react"
import { Link } from "react-router-dom"

function NavBar( { } ) {

    return(
        <>
            <div id="navBar">
                <Link to='/dustloop'>Credit to Dustloop</Link>
                <br></br>
                <Link to="/team">Team Builder</Link>
                <span>     </span>
                <Link to="/comments">Character Commenter</Link>
            </div>
        </>
    )


}

export default NavBar