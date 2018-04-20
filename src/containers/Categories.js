import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Download from "./Download";

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
      "Breadcrumbs",
      "Table",
      "Colors",
      "Highlights",
      "Quote"
    ]
  };

  render() {
    const name = this.props.appId.name;
    return (
      <section className="sgcreator-categories_section">
        <Link to="/">
          <div className="sgcreator-categories_logo">{name}</div>
          <h1 className="sgcreator-category_header">{name}</h1>
        </Link>
        <ol className="sgcreator-categories_list">{this.renderIndexList()}</ol>
        <Download data={this.props.data} />
      </section>
    );
  }
  renderIndexList() {
    return this.state.categories.map((category, idx) => {
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
