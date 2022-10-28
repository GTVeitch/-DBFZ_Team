import React , { useState } from "react";

function CommentForm( { currentChar } ) {

    const [newComment, setNewComment] = useState({
        name: null,
        content: null,
        votes: 0,
        id: (currentChar.comments.length+1)
    })

    function handleChange(e) {
        setNewComment({...newComment,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/characters/${currentChar.id}`, {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({...currentChar,
                     comments : [...currentChar.comments, newComment]
                    })
        })
    }


    return (
        <div  id="commentFormHolder">
            <form id="commentForm">
                <input type="text" name="name" placeholder="Username" onChange={handleChange}/>
                <input type="text" name="content" placeholder="Enter Comments" onChange={handleChange}/>
                <input type="submit" value="Add" onClick={(e) => handleSubmit(e)}/>
            </form>
        </div>
    )
}

export default CommentForm;