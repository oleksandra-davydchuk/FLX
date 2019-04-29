import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadMore } from "../actions/actions";

class UsersMore extends Component {
  render() {
    return (
      <div className="loadMore">
        <p>
          Displayed {this.props.users.slice(0, 5).length} users out of{" "}
          {this.props.users.length}
        </p>
        <button
          className="loadMoreButton"
          onClick={() => this.props.loadMore()}
        >
          LOAD MORE
        </button>
      </div>
    );
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({ loadMore: loadMore }, dispatch);
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  matchDispatchtoProps
)(UsersMore);
