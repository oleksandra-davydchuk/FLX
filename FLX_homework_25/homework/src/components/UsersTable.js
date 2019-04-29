import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeUser } from "../actions/actions";

class UsersTable extends Component {
  createTableList() {
    if (this.props.users.length) {
      return this.props.users
        .map(user => {
          return (
            <tr key={user.id}>
              <td className="usersPhoto">
                <img src={user.picture} />
              </td>
              <td className="usersName">{user.name}</td>
              <td className="usersAddress">{user.location}</td>
              <td className="usersEmail">{user.email}</td>
              <td className="usersPhone">{user.phone}</td>
              <td className="usersTimezone">{user.timezone}</td>
              <td className="usersButton">
                <button
                  className="removeButton"
                  onClick={() => this.props.removeUser(user)}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })
        .slice(0, 5);
    } else {
      return (
        <tr>
          <td className="noUsers" colSpan="7">
            <p>No users are found</p>
          </td>
        </tr>
      );
    }
  }
  render() {
    return (
      <table className="usersTable">
        <thead>
          <tr>
            <th className="usersPhoto">Photo</th>
            <th className="usersName">Name</th>
            <th className="usersAddress">Address</th>
            <th className="usersEmail">Email</th>
            <th className="usersPhone">Phone number</th>
            <th className="usersTimezone">Timezone</th>
            <th className="usersButton">Actions</th>
          </tr>
        </thead>
        <tbody>{this.createTableList()}</tbody>
      </table>
    );
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({ removeUser: removeUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  matchDispatchtoProps
)(UsersTable);
