import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-logo.css";
import "../style/Logo.css";

class Logo extends Component {
  render() {
    const logo = this.props.category.Logo;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(logo.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_logo"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={logo.className[item].name} />
              </div>
              <div className="sgcreator-tag-box">
                {`<${logo.tag} 
                src="${logo.className[item].src}"
                alt="${logo.className[item].alt}"
                class="${logo.className[item].name}">${item}</${logo.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.logo };
}

export default connect(mapStateToProps)(Logo);
