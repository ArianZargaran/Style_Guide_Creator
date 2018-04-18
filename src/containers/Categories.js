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
      "Quote"
    ]
  };

  render() {
    const name = this.props.appId.name;
    //const prefix = this.props.appId.prefix;
    var style = {
      backgroundImage:
        "url(https://docs.joomla.org/images/5/53/Vertical-logo-light-background-en.png)",
      display: "block",
      textIndent: "-9999px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "170px",
      width: "170px",
      margin: "10px auto 5px"
    };
    return (
      <section className="sgcreator-categories_section">
        <Link to="/">
          <div style={style}>{name}</div>
          <h1 className="sgcreator-category_header">{name}</h1>
        </Link>
        <ol className="sgcreator-categories_list">{this.renderIndexList()}</ol>
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
