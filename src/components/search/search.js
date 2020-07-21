import React from "react";

function Search(props) {
    return (
        <div>
            <input
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