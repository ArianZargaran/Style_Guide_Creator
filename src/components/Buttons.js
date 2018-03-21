import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/sgcreator/sgcreator-item-box/sgcreator-buttons.css";

class Buttons extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.buttons.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.buttons.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_buttons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <a className={this.props.list.buttons.className[item]}>
                  Learn more
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.buttons.tag} href="/" class="${
                  this.props.list.buttons.className[item]
                }">Learn more</${this.props.list.buttons.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Buttons);
