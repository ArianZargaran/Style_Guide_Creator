import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-buttons.css";
import "../style/Buttons.css";

class Buttons extends Component {
  render() {
    const buttons = this.props.category.Buttons;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(buttons.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_buttons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <button href="#" className={buttons.className[item]}>
                  Learn more
                </button>
              </div>
              <div className="sgcreator-tag-box">
                {`<${buttons.tag} href="/" class="${
                  buttons.className[item]
                }">Learn more</${buttons.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.buttons };
}

export default connect(mapStateToProps)(Buttons);
