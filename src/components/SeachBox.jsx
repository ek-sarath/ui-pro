import React from "react";
import "../App.css";

const SearchBox = () => {
    return (
        <div className='SearchBox'>
            <h3>Have more questions?</h3>
            <div className="SearchInputContainer">
                <input type="text" placeholder="     Ask your questions here..." className="SearchInput" />
                <button className="SearchButton">Search</button>
            </div>
        </div>
    );
};

export default SearchBox;
