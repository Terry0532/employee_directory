import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/table/table";
import Search from "../components/search/search";

class Employee extends Component {
    state = {
        list: [],
        newList: [],
        switch: true
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

    handleClick = () => {
        if (this.state.switch) {
            this.setState({ newList: this.state.newList.sort(this.compare), switch: false });
        } else {
            this.setState({ newList: this.state.newList.sort(this.compare).reverse(), switch: true });
        }
    }

    compare(a, b) {
        const employeeA = a.name.first.toLowerCase();
        const employeeB = b.name.first.toLowerCase();
        let comparison = 0;
        if (employeeA > employeeB) {
            comparison = 1;
        } else if (employeeA < employeeB) {
            comparison = -1;
        }
        return comparison;
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange} />
                <p>Click name to sort.</p>
                <Table
                    list={this.state.newList}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Employee;