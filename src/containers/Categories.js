import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {
    categories: [
      "Headers",
      "Typography",
      "Buttons",
      "Lists",
      "Links",
      "Icons",
      "Featured Icons",
      "Logo",
      "Form",
      "Form Elements",
      "Breadcrumbs",
      "Table",
      "Colors",
      "Highlights",
      "Quote"
    ]
  };

  render() {
    const logo = Object.keys(this.props.logo.style)[0];
    const name = this.props.appId.name;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-categories_section">
        <Link to="/">
          <div className={`${prefix}${logo}`}>{name}</div>
          <h1 className="sgcreator-category_header">{name}</h1>
        </Link>
        <ol className="sgcreator-categories_list">{this.renderIndexList()}</ol>
      </section>
    );
  }
  renderIndexList() {
    return _.map(this.state.categories).map((category, idx) => {
      return (
        <Link to={this.formatUrl(category)} key={category}>
          <li className="sgcreator-categories_list_item">{category}</li>
        </Link>
      );
    });
  }

  formatUrl(category) {
    const result = String(category)
      .toLowerCase()
      .replace(" ", "-");
    return result;
  }
}

function mapStateToProps(state) {
  return {
    logo: state.logo,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Categories);
