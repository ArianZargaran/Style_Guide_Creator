import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Download from "../components/Download";
import _ from "lodash";

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

  componentDidMount() {
    this.ref.value = this.reviewSelect();
  }

  render() {
    const name = this.props.appId.name;
    const { data } = this.props;

    return (
      <section className="sgcreator-categories_section">
        <Link to="/" onClick={this.onLogoClick.bind(this, this.ref)}>
          <div className="sgcreator-categories_logo">{name}</div>
          <h1 className="sgcreator-categories_header ">{name}</h1>
        </Link>
        <nav className="sgcreator-categories_list">
          {this.renderCategoriesList()}
        </nav>
        <div className="sgcreator-categories_select-wrapper">
          <select
            className="sgcreator-categories_select"
            onChange={this.onChangeSelection.bind(this)}
            ref={ref => (this.ref = ref)}
          >
            {this.renderSelectOptions()}
          </select>
        </div>
        <Download data={data} />
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

  renderSelectOptions() {
    return this.categories.map((category, idx) => {
      return (
        <option key={category} value={`${category}`}>
          {category}
        </option>
      );
    });
  }

  onChangeSelection(event) {
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

  onLogoClick(el) {
    el.value = "HOME";
  }

  reviewSelect() {
    let slash = window.location.href.lastIndexOf("/");
    let trim = window.location.href.substr(slash + 1, slash.length);
    let value = _.startCase(trim);
    return value === "" ? (value = "HOME") : value;
  }
}

function mapStateToProps(state) {
  return {
    logo: state.logo,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Categories);
