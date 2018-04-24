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
          <i
            className="fas fa-arrow-left sgcreator-categories-list_arrow sgcreator-categories-list_arrow_left"
            onClick={this.changeActive.bind(this, -1)}
          />
          {this.renderIndexList()}
          <i
            className="fas fa-arrow-right sgcreator-categories-list_arrow sgcreator-categories-list_arrow_right"
            onClick={this.changeActive.bind(this, +1)}
          />
        </nav>
        <Download data={this.props.data} />
      </section>
    );
  }
  renderIndexList() {
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

  formatUrl(category) {
    let result = String(category)
      .toLowerCase()
      .replace(" ", "-");
    return result === "home" ? "" : result;
  }

  changeActive(num, ev) {
    let newIdx = this.state.active + num;
    if (newIdx < 0) {
      newIdx = this.categories.length - 1;
    }
    if (newIdx >= this.categories.length) {
      newIdx = 0;
    }

    this.setState({
      active: newIdx
    });
  }
}

function mapStateToProps(state) {
  return {
    logo: state.logo,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Categories);
