import React, {useState} from "react"
import ReviewList from "./ReviewList"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SubmissionForm({handleUpdateSong, songs, deleteReview, handleAddReview, handleAddSong}){

    const [songID, setSongID] = useState('Song ID')
    const [userID, setUserID] = useState('User ID')
    const [starRating, setStarRating] = useState('Amount of Stars (Must be a Number Between 1 and 10)')

    const [newSongName, setNewSongName] = useState('New Song Name')
    const [newArtistName, setNewArtistName] = useState('New Artist Name')

    function handleSongID(e){
        setSongID(e.target.value)
        console.log(e.target.value)
    }

    function handleUserID(e){
        setUserID(e.target.value)
        console.log(e.target.value)
    }

    function handleStarRating(e){
        setStarRating(e.target.value)
        console.log(e.target.value)
    }

    function handleNewSongName(e){
        console.log(e.target.value)
        setNewSongName(e.target.value)
    }

    function handleNewArtistName(e){
        console.log(e.target.value)
        setNewArtistName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        
        fetch("http://localhost:9292/reviews", { // multiple post requests?
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                star_rating: starRating,
                song_id: songID,
                user_id: userID
            }),
        })
            .then((r) => r.json())
            .then((newReview) => {
                handleAddReview(newReview)
                setSongID("Song ID")
                setUserID("User ID")
                setStarRating("Amount of Stars (Must be a Number Between 1 and 10)")
            })
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
            })
    }

    return(
        <> 
        <h3>Submit a New Review</h3>
        <Form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={songID}
            onChange={handleSongID}
            />
            <input
            type="text"
            name="name"
            value={userID}
            onChange={handleUserID}/>
            <input
            type="text"
            name="name"
            value={starRating}
            onChange={handleStarRating}/>
            <Button type="submit">Submit new Review</Button>
        </Form>

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

        
        <ReviewList handleUpdateSong={handleUpdateSong} songs={songs} deleteReview={deleteReview}/>
        </>
    )
}

export default SubmissionForm