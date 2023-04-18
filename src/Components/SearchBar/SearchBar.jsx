import React, { useState } from 'react';
import App from '../../App';





//form that has 1 input and one button, onSubmit the form calls the filter function passed down through props


const SearchBar = (props) => {
    const [search, setSearch] =useState([]);
    
    function handleSongSubmit(event){    
        event.preventDefault();
        
        props.searchInput(search)
    
    };
      
            
            
            
        return ( 
        <div>
        <form onSubmit={handleSongSubmit}>
            <p>
                <input type='text' placeholder="Search a song" value={search} onChange={(event) => setSearch(event.target.value)}/>
            </p>
        </form>
            <div>
                <p> {search.title}</p>
            </div>
        </div>
        
        );
    
};
 export default SearchBar;





    

