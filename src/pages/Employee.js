import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/table/table";

class Employee extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        //get the list of employee and set it to list
        API.getList()
            .then(res => {
                this.setState({ list: res.data.results });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Table list={this.state.list} />
            </div>
        );
    }
}

export default Employee;