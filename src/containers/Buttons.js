import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-buttons.css";
import "../style/Buttons.css";

class Buttons extends Component {
  render() {
    const buttons = this.props.category.Buttons;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Buttons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(buttons).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_buttons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <button href="#" className={buttons[item]}>
                  Learn more
                </button>
              </div>
              <div className="sgcreator-tag-box">
                {`<button href="/" class="${prefix}${
                  buttons[item]
                }">Learn more</button>`}
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
    category: state.buttons,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Buttons);
