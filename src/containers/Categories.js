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
      "Breadcrumbs",
      "Table",
      "Colors",
      "Highlights",
      "Quote",
      "Sample Page"
    ]
  };

  render() {
    const logo = this.props.logo.Logo;

    return (
      <section className="sgcreator-categories_section">
        <Link to="/">
          <div className={logo.className["Full color logo"].name} />
          <h1 className="sgcreator-category_header">{this.props.appId.name}</h1>
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

// className = { logo.className["Full color logo"].name }
