import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Download from "../components/Download";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.categories = [
      "HOME",
      "Headers",
      "Typography",
      "Buttons",
      "Lists",
      "Links",
      "Icons",
      "Featured Icons",
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
          {this.renderCategoriesList()}
        </nav>
        <select
          className="sgcreator-categories_select"
          onChange={this.changeSection.bind(this)}
        >
          {this.renderSelectList()}
        </select>
        <Download data={this.props.data} />
      </section>
    );
  }
  renderCategoriesList() {
    return this.categories.map((category, idx) => {
      return (
        <Link
          className={`sgcreator-categories-list_item`}
          to={this.formatUrl(category)}
          key={category}
        >
          {category}
        </Link>
      );
    });
  }

  renderSelectList() {
    return this.categories.map((category, idx) => {
      return (
        <option key={category} value={`${category}`}>
          {category}
        </option>
      );
    });
  }

  changeSection(event) {
    let val = this.formatUrl(event.target.value);
    this.props.history.push(`${val}`);
  }

  formatUrl(category) {
    let regExp = /\s+/g;
    let val = String(category)
      .toLowerCase()
      .replace(regExp, "-");

    return val === "home" ? "" : val;
  }
}

function mapStateToProps(state) {
  return {
    logo: state.logo,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Categories);
