import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddASong.css'






const AddASong = (props) => {
    const [title, setTitle] =useState('');
    const [artist, setArtist] =useState('');
    const [album, setAlbum] =useState('');
    const [date, setDate] =useState('');
    const [genre, setGenre] =useState('');
    const [likes, setLikes] =useState(0);


    


    
    
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
            <div className=' form-border'>
            <div className='font'>
            <p>Title: <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/></p>
            <p>Artist: <input type='text'value={artist} onChange={(event) => setArtist(event.target.value)} /></p>
            <p>Album: <input type='text'value={album} onChange={(event) => setAlbum(event.target.value)} /></p>
            <p>Release Date: <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/></p>
            <p>Genre: <input type='text' value={genre}onChange={(event) => setGenre(event.target.value)}/></p>
            <p>Likes: <input type='number' value={likes}onChange={(event) => setLikes(parseInt(event.target.value))}/></p>
            <div className='button'>
            <button type='submit'>Add New Song</button>
            </div>
            </div>
            </div>


        </form>
     );
}
 
export default AddASong;


