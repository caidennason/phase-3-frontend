import React from "react"
import Reviews from "./Reviews"

function ReviewList({songs, deleteReview, handleUpdateReview}){
   

    return(
        <>
        {songs.map((song) => {
            //console.log(song)
            return <Reviews handleUpdateReview={handleUpdateReview} song={song} key={song.id} deleteReview={deleteReview} id={song.id} name={song.song_name} artist={song.artist_name} user={song.users.map((u) => u.full_name)} userid={song.users.map((u) => u.id)} />
        })}
        </>
    )
}

export default ReviewList
