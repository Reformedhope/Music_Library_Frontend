import React, { useState } from 'react';






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
            likes: likes

        };
            props.createASong(newSong)
        
    }




    return ( 
        <form onSubmit={handleSubmit}>
            <p>Title: <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/></p>
            <p>Artist: <input type='text'value={artist} onChange={(event) => setArtist(event.target.value)} /></p>
            <p>Album: <input type='text'value={album} onChange={(event) => setAlbum(event.target.value)} /></p>
            <p>Release Date: <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/></p>
            <p>Genre: <input type='text' value={genre}onChange={(event) => setGenre(event.target.value)}/></p>
            <p>Likes: <input type='number' value={likes}onChange={(event) => setLikes(parseFloat(event.target.value))}/></p>
            <button type='submit'>Add New Song</button>
            

        </form>
     );
}
 
export default AddASong;