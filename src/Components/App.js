// import logo from './logo.svg';
import React, {useState, useEffect} from "react"
import Card from 'react-bootstrap/Card'
import SubmissionForm from "./SubmissionForm";
import SongInformation from "./SongInformation";
import ReviewList from "./ReviewList";
import Reviews from "./Reviews";
import { CardActionArea } from "@mui/material";
// import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/songs")
      .then((r) => r.json())
      .then((data) => setSongs(data));
  }, [])

  function deleteReview(id){
    const updatedReviews = songs.filter((song) => song.id !== id)
    setSongs(updatedReviews)
  }

  function handleAddReview(newReview){
    setSongs([...newReview, songs])
  }

  function handleAddSong(newSong){
    setSongs([...songs, newSong])
  }

  function handleUpdateSong(updatedSongObj){
    const updatedSongs = songs.map((song) => {
      if (song.id === updatedSongObj.id) {
        return updatedSongObj
      } else {
        return song
      }
    })
    setSongs(updatedSongs)
  }

   console.log(songs)

  return (

    <>
    <Card>
      <Card.Title>Rate Some of Your Favorite Songs</Card.Title>
      <Card.Text>Rate a few of my favorite songs! This project allows you to rate your favorite songs as 4 different creative people</Card.Text>
      <Card.Text>Make sure you are inputting the correct ID for each Song and User you are rating or editing, found below</Card.Text>

    {songs.map((s) => {
      return <SongInformation name={s.song_name} id={s.id}/>
    })}

      <h2>Reviewers</h2>
      <li>Paul McCartney: 1</li> 
      <li>Bob Dylan: 2</li>
      <li>Tim Heidecker: 3</li>
      <li>Aubrey Plaza: 4</li>

    </Card>

    <SubmissionForm handleAddSong={handleAddSong} handleUpdateSong={handleUpdateSong} handleAddReview={handleAddReview} songs={songs} deleteReview={deleteReview}/>
    </>
  );
}

export default App;
