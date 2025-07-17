import './SearchBar.css';


type SearchBarProps = {
    placeholdertext?: string;
}

const SearchBar = ({ placeholdertext}: SearchBarProps ) => {
    return(
        <div className="searchbar-container">
            <input type="text" placeholder={placeholdertext} />
        </div>
    );
}
export default SearchBar;