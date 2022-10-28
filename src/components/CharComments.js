import React from "react"

function CharComments ( { currentChar } ) {

    const comments = currentChar.comments.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes)).map((entry) => {
        let filler = entry
        const otherComments = [...currentChar.comments.filter(com => com!=entry)]
        const votes = document.getElementById(filler.id)


        function handleClick(e){
            e.preventDefault()
            filler.votes = filler.votes+1

            fetch(`http://localhost:3000/characters/${currentChar.id}`, {
                method : 'PATCH',
                headers : { "content-type" : "application/json"},
                body : JSON.stringify({...currentChar,
                    comments : [...otherComments , filler]
                   })


            })
            .then(filler.votes+1)
            .then(votes.innerHTML=filler.votes)

        }

        return (
            <div className="comments">
                <span className="details">
                    <ul>{entry.name}</ul><span className="score" onClick={e => handleClick(e)} id={filler.id}>{filler.votes}</span>
                    <ul>{entry.content}</ul>
                </span>
            </div>
        )
    })


    return(
        <>
        {comments}
        </>
    )
}

export default CharComments;