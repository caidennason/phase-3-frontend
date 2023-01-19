import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function NewSongForm({handleAddSong}){

    const [newSongName, setNewSongName] = useState('New Song Name')
    const [newArtistName, setNewArtistName] = useState('New Artist Name')

    function handleNewSongName(e){
        setNewSongName(e.target.value)
    }

    function handleNewArtistName(e){
        setNewArtistName(e.target.value)
    }

    function handleSongSubmit(e){
        e.preventDefault()

        fetch("http://localhost:9292/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                song_name: newSongName,
                artist_name: newArtistName
            }),
        })
            .then((resp) => resp.json())
            .then((newSong) => {
                handleAddSong(newSong)
                setNewSongName('New Song Name')
                setNewArtistName('New Artist Name')
            })
    }



    return(
        <div>
        <h3>Submit a New Song</h3>
        <Form onSubmit={handleSongSubmit}>
            <input
            type="text"
            name="name"
            value={newSongName}
            onChange={handleNewSongName}
            />
            <input
            type="text"
            name="name"
            value={newArtistName}
            onChange={handleNewArtistName}
            />
            <Button type="submit">Submit new Song</Button>
        </Form>
        </div>
    )
}

export default NewSongForm