import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function EditSong({handleUpdateSong, id}){

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

    const handleSongUpdateSubmit = (e)=>{
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
            .then((updatedSong) => console.log(updatedSong))
    }

    return(
        <>
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
                <Button type="submit"style={{width:'10rem'}}>Edit Songs</Button>
            </Form>
        </>
    )
}

export default EditSong