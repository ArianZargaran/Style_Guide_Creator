import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Categories extends Component {
  render() {
    const { children = "YourApp Name" } = this.props;

    return (
      <section className="sgcreator-categories_section">
        <Link to="/">
          <div
            className={this.props.logo.logo.className["Full color logo"].name}
          />
          <h1 className="sgcreator-category_header">{children}</h1>
        </Link>
        <ol className="sgcreator-categories_list">{this.renderIndexList()}</ol>
      </section>
    );
  }

  renderIndexList() {
    return _.map(this.props.list).map((elem, idx) => {
      return (
        <Link to={elem.url} key={elem.section}>
          <li className="sgcreator-categories_list_item">{elem.section}</li>
        </Link>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    logo: state.logo
  };
}

export default connect(mapStateToProps)(Categories);
