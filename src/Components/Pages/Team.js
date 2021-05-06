import React, { Component } from 'react';
import List from './List'

class Register extends Component {
    state = {
        lists: []
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ lists: data })
        })
        .catch(console.log)
    }
    render() {
        return (
            <List lists={this.state.lists} />
        );
    }
}

export default Register;