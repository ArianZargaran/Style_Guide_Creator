import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
require("codemirror/mode/css/css");

class Icons extends Component {
  render() {
    const icons = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Icons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(icons).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_icons"
              key={i}
            >
              <div className="sgcreator-sample-box">
                <i className={`${prefix}${item}`} />
              </div>
              <div className="sgcreator-tag-box">
                {`<i class="${prefix}${item}"></i>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${icons[item]}`}</textarea>
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
    category: state.icons,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Icons);
