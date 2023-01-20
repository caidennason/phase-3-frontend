import React from "react"
import Reviews from "./Reviews"

function ReviewList({songs, deleteReview, handleUpdateReview, handleUpdateSong}){

    console.log(songs)
   

    return(
        <div>
       
        {songs.map((song) => {
            return <Reviews handleUpdateSong={handleUpdateSong} handleUpdateReview={handleUpdateReview} song={song} key={song.id} deleteReview={deleteReview} id={song.id} name={song.song_name} artist={song.artist_name}  rating={song?.reviews?.map((r) => r?.star_rating)} userId={song?.reviews?.map((r) => r?.user_id)} />
        })}
        </div>
    )
}

export default ReviewList
