import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/sgcreator/sgcreator-item-box/sgcreator-logo.css";

// import logo from "../styles/images/logo.svg";

class Logo extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.logo.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.logo.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_logo"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={this.props.list.logo.className[item].name} />
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.logo.tag} 
                src="${this.props.list.logo.className[item].src}"
                alt="${this.props.list.logo.className[item].alt}"
                class="${this.props.list.logo.className[item].name}">${item}</${
                  this.props.list.logo.tag
                }>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.logo };
}

export default connect(mapStateToProps)(Logo);
