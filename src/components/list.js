import React from "react";

function List(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                {props.list.map(res => (
                    <tr key={res.id.value}>
                        <td><img src={res.picture.medium} alt={res.name.first}></img></td>
                        <td>{res.name.first} {res.name.last}</td>
                        <td>{res.phone}</td>
                        <td>{res.email}</td>
                        <td>{res.dob.date.substring(0, res.dob.date.length - 14)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;