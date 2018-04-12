import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
require("codemirror/mode/css/css");

class Colors extends Component {
  render() {
    const colors = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Colors</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(colors).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_colors"
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={`${prefix}${item}`}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<div class="${prefix}${item}"></div>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${colors[item]}`}</textarea>
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
