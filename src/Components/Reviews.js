import React, {useState} from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import EditSong from "./EditSong"

function Reviews({id, name, artist, user, rating, deleteReview, userid, song, handleUpdateSong}){

    function handleDeleteClick(){
        fetch(`http://localhost:9292/songs/${id}`, {
            method: "DELETE"
        })

        deleteReview(id)
    }

    console.log(user)
    return(
        <div>
            <Card style={{width:'18rem'}}>
                <Card.Title>{name} - {artist}</Card.Title>
                <Card.Text>{rating} Liked by {user?.join(", ")}</Card.Text>
                <Button style={{width:'5rem'}} onClick={handleDeleteClick}>Delete</Button>
            </Card>

            <EditSong handleUpdateSong={handleUpdateSong} id={id}/>
            <br></br>
        </div>
    )
}

export default Reviews