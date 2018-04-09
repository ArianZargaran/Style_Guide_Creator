import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-buttons.css";

class Buttons extends Component {
  render() {
    const buttons = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Buttons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(buttons).map((item, i, arr) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_buttons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <button className={`${prefix}${arr[0]} ${prefix}${item}`}>
                  Learn more
                </button>
              </div>
              <div className="sgcreator-tag-box">
                {i <= 1
                  ? `Common properties for all Buttons`
                  : `<button class="${prefix}${
                      arr[0]
                    } ${prefix}${item}">Learn more</button>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${buttons[item]}`}</textarea>
              </div>
              <Style>{`.${prefix}${buttons[item]}`}</Style>
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
