import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions'
import { Table } from 'react-bootstrap'

class App extends Component {

  componentWillMount() {
    this.props.showUsers()
  }

  renderUsersList() {
    return this.props.users.map((user) => {
      return ( <User name={user.name} />)
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUsersList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

class User extends Component {
  render(){
    return (
      <li> {this.props.name} </li>
    );
  }
}

export default connect(mapStateToProps, { showUsers })(App)
