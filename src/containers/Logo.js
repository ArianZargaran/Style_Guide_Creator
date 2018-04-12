import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
require("codemirror/mode/css/css");

class Logo extends Component {
  render() {
    const logo = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const name = this.props.appId.name;

    return (
      <section className="sgcreator-representation_section">
        <h1>Logo</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(logo).map((item, i, arr) => (
            <div className="sgcreator-item-box sgcreator-item-box_logo" key={i}>
              <div className="sgcreator-sample-box">
                <h1 className={`${prefix}${arr[0]} ${prefix}${item}`}>
                  {name}
                </h1>
              </div>
              <div className="sgcreator-tag-box">
                {i === 0
                  ? `Common properties for all Links`
                  : `<h1 class="${prefix}${
                      arr[0]
                    } ${prefix}${item}">${name}</h1>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${logo[item]}`}</textarea>
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
