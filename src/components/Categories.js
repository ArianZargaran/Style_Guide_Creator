import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Categories extends Component {
  render() {
    const { children = "YourApp Name" } = this.props;

    return (
      <section className="sgcreator-category_list">
        <Link to="/">
          <h1 className="sgcreator-category_header">{children}</h1>
        </Link>
        <ol>{this.renderIndexList()}</ol>
      </section>
    );
  }

  renderIndexList() {
    return _.map(this.props.list).map((elem, idx) => {
      return (
        <Link to={elem.url} key={elem.section}>
          <li>{elem.section}</li>
        </Link>
      );
    });
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Categories);
