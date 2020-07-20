import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/table/table";
import Search from "../components/search/search";

class Employee extends Component {
    state = {
        list: [],
        newList: []
    };

    componentDidMount() {
        //get the list of employee and set it to list and newList
        API.getList()
            .then(res => {
                this.setState({ list: res.data.results, newList: res.data.results });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        //store user input to input variable and remove space
        const input = e.target.value.replace(/\s/g, "");
        //to store matching employee
        const newList = [];

        for (let i = 0; i < this.state.list.length; i++) {
            //store employee name to name variable, lower case and no space
            const name = this.state.list[i].name.first.toLowerCase() + this.state.list[i].name.last.toLowerCase();
            const regex = new RegExp(input.toLowerCase(), "g");
            //if match then store it inside of newList
            if (name.match(regex)) {
                newList.push(this.state.list[i]);
            }
        }
        //re-render with newList
        this.setState({ newList: newList });
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange} />
                <br />
                <Table list={this.state.newList} />
            </div>
        );
    }
}

export default Employee;