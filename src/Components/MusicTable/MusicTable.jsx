import './MusicTable.css'

const MusicTable = (props) => {
    return ( 
    <table>
    <thead>
        <tr>
            <div className='fonts'>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                </div>
                
            </tr>
    </thead>
    <tbody>
        {props.musicEntered.map((song)=>{
        return(
            <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
            <td>{song.likes}</td>
            </tr>

        );
        })}
    </tbody>
</table>
     );
}
 
export default MusicTable;


