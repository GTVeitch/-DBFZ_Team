import React from "react";
import CommentForm from "./CommentForm"
import CharComments from "./CharComments"

function Comments( { currentChar , setCurrentChar} ) {

    const charStrengths = currentChar.strengths.keywords.sort().map((word) => {
            return (
                    <ul className="details">+{word}</ul>
            )
        })

    const charWeaknesses = currentChar.weaknesses.keywords.sort().map((word) => {
            return (
                    <ul className="details">-{word}</ul>
            )
        })


    return(
        <>
            <div className="tableHolder">
                <table className="mainCharTable">
                    <tbody>
                        <tr className="teamCharContainer">
                            {currentChar.name}
                        </tr>
                        <tr  className="teamCharContainer">
                            <img src={currentChar.images.mainImage} className="teamImages"/>
                        </tr>
                        <tr  className="teamCharContainer">
                            <span>{charStrengths}</span>

                        </tr>
                        <tr  className="teamCharContainer">
                        <span>{charWeaknesses}</span>
                        </tr>
                        <tr  className="teamCharContainer">
                            <td>Comments
                            <CharComments currentChar={currentChar} setCurrentChar={setCurrentChar}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <CommentForm currentChar={currentChar}/>
            <br></br>
        </>
    )


}


export default Comments