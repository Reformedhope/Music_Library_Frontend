import React, { useState, useEffect } from 'react';   
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddASong from './Components/AddASong/AddASong';


function App() {

  const[songs, setSongs] =useState([]);


  // function addNewSong(addition){
  //   let newAddition = [ ...songs, addition]
    
  //   setSongs(newAddition);
  
  

  useEffect(() => {
    getAllSongs();
  
  }, []);

  // async function  createASong (AddASong){
  //   let response = axios.post('http://127.0.0.1:8000/api/songs/',AddASong);
  //    if(response.status ===201)
  //    getAllSongs();
  //       console.log(response.data)
  //   };



  async function getAllSongs(){
   let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    console.log(response.data);
    setSongs(response.data)
  
  };

return (
    <div>
     
      <AddASong createASong/>
      <MusicTable musicEntered = {songs}/>

      <button onClick={()=> getAllSongs }>Get All Songs</button>
    </div>
  );

  
};

export default App;
