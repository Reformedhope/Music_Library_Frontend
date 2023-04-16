import React, { useState } from 'react';
import App from '../../App';





//form that has 1 input and one button, onSubmit the form calls the filter function passed down through props


const SearchBar = (props) => {
    const [searchTitle, setSearchTitle] =useState([]);
    
    return ( 
        function handleSongSubmit(event){    
            event.preventDefault();
        
        
            
            
            
            {props.searchBar.map((searchbarSearch)=>{
            return ( 
            <><form onSubmit={handleSongSubmit}>

                    <p><input type='text' placeholder="Search a song" value={searchTitle} onChange={(event) => setSearchTitle(event.target.value)} /></p>
                </form>
                    <div>
                        <p> {searchbarSearch.searchTitle}</p>
                    </div></>
    
    
            );
            })}
            
        }

     );
}
 
export default SearchBar;





    

