import React, {useState} from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import EditSong from "./EditSong"

function Reviews({id, name, artist, user, rating, deleteReview, userId, song, handleUpdateSong}){

    function handleDeleteClick(){
        fetch(`http://localhost:9292/songs/${id}`, {
            method: "DELETE"
        })

        deleteReview(id)
    }

    return(
        <div>
            <Card style={{width:'18rem'}}>
                <Card.Title>{name} - {artist}</Card.Title>
                <Card.Text>{rating.join(', ')} Stars Liked by Reviewer {userId?.join(", Reviewer ")}</Card.Text>
                <Button style={{width:'5rem'}} onClick={handleDeleteClick}>Delete</Button>
            </Card>

            <EditSong handleUpdateSong={handleUpdateSong} id={id}/>
            <br></br>
        </div>
    )
}

export default Reviews