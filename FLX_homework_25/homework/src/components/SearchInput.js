import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchUser } from "../actions/actions";

class SearchInput extends Component {
  render() {
    return (
      <form className="searchForm">
        <label>
          {" "}
          Search by name:
          <input
            type="search"
            placeholder="Enter user name..."
            className="searchInput"
            onChange={(e) => this.props.searchUser(e.target.value.trim())}
          />
        </label>
      </form>
    );
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({ searchUser: searchUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  matchDispatchtoProps
)(SearchInput);
