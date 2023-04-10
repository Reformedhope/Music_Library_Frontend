import React, { useState, useEffect } from 'react';   
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

  const[songs, setSongs] =useState([]);
  

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/songs/');
    console.log(response.data);
    setSongs(response.data)
  };


  return (
    <div>
      <button onClick={()=> getAllSongs }>Get All Songs</button>

      <MusicTable musicEntered = {songs}/>
    </div>
//     <div>
    
// </div>
  );

  
}

export default App;
