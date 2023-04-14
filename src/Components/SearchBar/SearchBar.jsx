//form that has 1 input and one button, onSubmit the form calls the filter function passed down through props

const SearchBar = (props) => {
    
    
    function handleSubmit(event){    
        event.preventDefault();
    
    
    
    
    return ( 
    <form onSubmit={handleSubmit}>
    <p>Title: <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/></p>
    </form>


     );
}
 
export default SearchBar;


