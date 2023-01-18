import React, {useState} from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'

function Reviews({id, name, artist, user, rating, deleteReview, userid, song, handleUpdateSong}){

    const [editSongName, setSongName] = useState('Edit Song Name')
    const [editArtistName, setArtistName] = useState('Edit Artist Name')

    function handleSongEdit(e){
        console.log(e.target.value)
        setSongName(e.target.value)
    }

    function handleArtistEdit(e){
        console.log(e.target.value)
        setArtistName(e.target.value)
    }

    function handleDeleteClick(){
        fetch(`http://localhost:9292/songs/${id}`, {
            method: "DELETE"
        })

        deleteReview(id)
    }

    function handleSongUpdateSubmit(e){
        e.preventDefault()

        fetch(`http://localhost:9292/songs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                song_name : editSongName,
                artist_name: editArtistName
            }),
        })
            .then((r) => r.json())
            .then((updatedSong) => handleUpdateSong(updatedSong))
    }

    return(
        <div>
            <Card style={{width:'18rem'}}>
                <Card.Title>{name} - {artist}</Card.Title>
                <Card.Text>Liked by {user.join(", ")}</Card.Text>
                <view style={{flexDirection:"row"}}>
                <Button style={{width:'5rem'}} onClick={handleDeleteClick}>Delete</Button>
                </view>
            </Card>
            <Form onSubmit={handleSongUpdateSubmit}>
                <input type="text" 
                name="name"
                value={editSongName} 
                onChange={handleSongEdit}
                />
                <input type="text" 
                name="name"
                value={editArtistName} 
                onChange={handleArtistEdit}
                />
                <Button type="submit"style={{width:'10rem'}}>Edit Reviewer</Button>
            </Form>
            <br></br>
        </div>
    )
}

export default Reviews