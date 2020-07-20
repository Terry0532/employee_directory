import React from "react";

function Search(props) {
    return (
        <div>
            <input
                type="text"
                name="search"
                placeholder="Employee name"
                value={props.value}
                onChange={props.handleInputChange}
            />
        </div>
    )
}

export default Search;