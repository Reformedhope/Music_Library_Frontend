import React, { useState } from 'react';
import './SearchBar.css'





//form that has 1 input and one button, onSubmit the form calls the filter function passed down through props


const SearchBar = (props) => {
    const [search, setSearch] =useState([]);
    
    function handleSongSubmit(event){    
        event.preventDefault();
        props.searchInput(search)
    
    };
      
            
            
            
    return ( 
        <div>
            <div className='style'>
                <form onSubmit={handleSongSubmit}>
                    <input type='text'
                        placeholder="Search a song" 
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    /> 
                    <button type='submit'>Search Songs</button> 
                </form>
            </div>
        </div>
        
    );
    
};
 export default SearchBar;





    

