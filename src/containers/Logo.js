import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-logo.css";
import "../style/Logo.css";

class Logo extends Component {
  render() {
    const logo = this.props.category.Logo;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Logo</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(logo).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_logo"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={logo[item].name} />
              </div>
              <div className="sgcreator-tag-box">
                {`<img
                src="${logo[item].src}"
                alt="${logo[item].alt}"
                class="${prefix}${logo[item].name}">${item}</img>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.logo,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Logo);
