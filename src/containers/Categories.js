import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Download from "./Download";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.categories = [
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
    ];
  }

  render() {
    const name = this.props.appId.name;
    return (
      <section className="sgcreator-categories_section">
        <Link to="/">
          <div className="sgcreator-categories_logo">{name}</div>
          <h1 className="sgcreator-categories_header ">{name}</h1>
        </Link>
        <nav className="sgcreator-categories_list">
          {this.renderIndexList()}
        </nav>
        <Download data={this.props.data} />
      </section>
    );
  }
  renderIndexList() {
    return this.categories.map((category, idx) => {
      return (
        <Link
          className="sgcreator-categories_list_item"
          to={this.formatUrl(category)}
          key={category}
        >
          {category}
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
