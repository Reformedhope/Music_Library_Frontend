import React, { useState, useEffect } from 'react';   
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddASong from './Components/AddASong/AddASong';
import SearchBar from './Components/SearchBar/SearchBar';
import './Components/App.css';



function App() {

  const[songs, setSongs] = useState([]);
  

  useEffect(() => {   //running when a condition is met, with empty brackets only runs when page initially loads
    getAllSongs();
  
  }, []);   //[this is the condition]

  async function getAllSongs(){
   let response = await axios.get ('http://127.0.0.1:8000/api/songs/');
    console.log(response.data);
    setSongs(response.data)
  
  };

    async function searchBarSearch(searchInput){
      
    // let response = await axios.get ('http://127.0.0.1:8000/api/songs/');
    let response = songs.filter(song => {
      return (
        song.title.includes(searchInput) ||
        song.album.includes(searchInput) ||
        song.artist.includes(searchInput)||
        song.genre.includes(searchInput)
      );
    });
   setSongs(response)
};

//filter function on this level that is passed down to SearchBar component
//start with filtering title, then once that works filter additional properties
return (
    <div>
      <div class="flex-container">
        <div>
          <AddASong getAllSongs={getAllSongs} />  
        </div>
          <div>  
            <SearchBar searchInput={searchBarSearch}/> 
          </div> 
            <div className='form-border-button'>
              <button onClick={()=> getAllSongs()}>Get All Songs</button>
            </div>
              <div>
                <MusicTable musicEntered={songs}/>
              </div>
      </div>
    </div>
        );

  
};

export default App;


//This is how the CSS Styling will be for this page 
{/* <div className='container-fluid'>
<div className='row'>
<div className='col-md-6'>

</div>
</div>
</div> */}