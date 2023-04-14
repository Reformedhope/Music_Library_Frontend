import React, { useEffect, useState } from 'react';
import axios from 'axios';






const AddASong = (props) => {
    const [title, setTitle] =useState('');
    const [artist, setArtist] =useState('');
    const [album, setAlbum] =useState('');
    const [date, setDate] =useState('');
    const [genre, setGenre] =useState('');
    const [likes, setLikes] =useState(0);


    
    // async function  createASong (newSong){
    //       let newSong ={
    //         title: title,
    //         artist: artist,
    //         album: album,
    //         date: date,
    //         genre: genre,
    //         likes: likes,
    //     };
    //     let response = axios.post('http://127.0.0.1:8000/api/songs/',newSong);
        //  if(response.status ===201)
        //  await getAllSongs();
        //     console.log(response.data)
        // };

  // async function  createASong (AddASong){
  //   let response = axios.post('http://127.0.0.1:8000/api/songs/',AddASong);
  //    if(response.status ===201)
  //    getAllSongs();
  //       console.log(response.data)
  //   };

    
    
    function handleSubmit(event){    
        event.preventDefault();
        let newSong ={
              title: title,
              artist: artist,
              album: album,
              date: date,
              genre: genre,
              likes: likes,
          };
            createASong(newSong)
        
    }
        
    async function createASong (newSong){            
        let response = await axios.post('http://127.0.0.1:8000/api/songs/',newSong);
        if(response.status ===201){
        console.log(response.data)
        await props.getAllSongs();
        }
    };




    return ( 
        <form onSubmit={handleSubmit}>
            <p>Title: <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/></p>
            <p>Artist: <input type='text'value={artist} onChange={(event) => setArtist(event.target.value)} /></p>
            <p>Album: <input type='text'value={album} onChange={(event) => setAlbum(event.target.value)} /></p>
            <p>Release Date: <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/></p>
            <p>Genre: <input type='text' value={genre}onChange={(event) => setGenre(event.target.value)}/></p>
            <p>Likes: <input type='number' value={likes}onChange={(event) => setLikes(parseInt(event.target.value))}/></p>
            <button type='submit'>Add New Song</button>
            

        </form>
     );
}
 
export default AddASong;