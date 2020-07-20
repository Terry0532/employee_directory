import React, { Component } from "react";
import API from "../utils/API";
import List from "../components/list";

class Results extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        API.getList()
            .then(res => {
                this.setState({ list: res.data.results });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <List list={this.state.list} />
            </div>
        );
    }
}

export default Results;