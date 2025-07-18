import './SearchBar.css';


type SearchBarProps = {
    placeholdertext?: string;
}

export const SearchBar = ({ placeholdertext}: SearchBarProps ) => {
    return(
        <div className="searchbar-container">
            <input type="text" placeholder={placeholdertext} />
        </div>
    );
}
