// import {Input} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import"./Search.css"


const Search = ({search,onSearchChange}) => {

  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e)=>onSearchChange(e)}
      />
    </div>
  )
}

export default Search