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

    this.state = {
      active: 0
    };

    console.log(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   const locationChanged = nextProps.location !== this.props.location;
  // }

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
        <select onChange={this.changeSection.bind(this)}>
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
          className={`sgcreator-categories-list_item ${
            this.state.active === idx ? "enabled" : "disabled"
          }`}
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
    let val = event.target.value;

    let result = String(val)
      .toLowerCase()
      .replace(" ", "-");

    console.log(result);

    // val === "home" ? (val = "") : val;

    // this.props.history.push(`/${val}`);
  }

  formatUrl(category) {
    let result = String(category)
      .toLowerCase()
      .replace(" ", "-");
    return result === "home" ? "" : result;
  }

  // changeActive(num, ev) {
  //   let newIdx = this.state.active + num;
  //   if (newIdx < 0) {
  //     newIdx = this.categories.length - 1;
  //   }
  //   if (newIdx >= this.categories.length) {
  //     newIdx = 0;
  //   }

  //   this.setState({
  //     active: newIdx
  //   });
  // }
}

function mapStateToProps(state) {
  return {
    logo: state.logo,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Categories);
