import React from "react"
import Reviews from "./Reviews"

function ReviewList({songs, deleteReview, handleUpdateReview}){

    console.log(songs)
   

    return(
        <div>
       
        {songs.map((song) => {
            console.log(song.users)
            return <Reviews handleUpdateReview={handleUpdateReview} song={song} key={song.id} deleteReview={deleteReview} id={song.id} name={song.song_name} artist={song.artist_name} user={song?.users?.map((u) => u?.full_name)} />
        })}
        </div>
    )
}

export default ReviewList
