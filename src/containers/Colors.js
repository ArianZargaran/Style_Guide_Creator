import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-colors.css";
import "../style/Colors.css";

class Colors extends Component {
  render() {
    const colors = this.props.category.Colors;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Colors</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(colors).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_colors"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={colors[item]}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<div class="${prefix}${colors[item]}"></div>`}
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
    category: state.colors,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Colors);
