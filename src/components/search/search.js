import React from "react";

function Search(props) {
    return (
        <div>
            Search: <input
                type="text"
                name="search"
                placeholder="Employee Name"
                value={props.value}
                onChange={props.handleInputChange}
                autoComplete="off"
            />
        </div>
    )
}

export default Search;