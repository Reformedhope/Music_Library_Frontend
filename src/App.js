import React, { useState, useEffect } from 'react';   
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddASong from './Components/AddASong/AddASong';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {

  const[songs, setSongs] = useState([]);
  const [searchTitle, setSearchTitle] =useState([]);

  useEffect(() => {   //running when a condition is met, with empty brackets only runs when page initially loads
    getAllSongs();
  
  }, []);   //[this is the condition]

  async function getAllSongs(){
   let response = await axios.get ('http://127.0.0.1:8000/api/songs/');
    console.log(response.data);
    setSongs(response.data)
  
  };

    async function searchBarSearch(){
    let response = await axios.put ('http://127.0.0.1:8000/api/songs/');
    {songs.filter((songs => songs.searchTitle.toLowerCase().includes('')))}
   console.log(response.data)
   setSearchTitle(response.data)
};

//filter function on this level that is passed down to SearchBar component
//start with filtering title, then once that works filter additional properties
return (
    <div>
      <SearchBar searchBar={searchBarSearch}/>
      <AddASong getAllSongs={getAllSongs} />
      <MusicTable musicEntered = {songs}/>

      <button onClick={()=> getAllSongs()}>Get All Songs</button>
    </div>
  );

  
};

export default App;
