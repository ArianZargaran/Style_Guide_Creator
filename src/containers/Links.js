import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
require("codemirror/mode/css/css");

class Links extends Component {
  render() {
    const links = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const { children = "Links" } = this.props;

    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.children}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(links).map((item, i, arr) => (
            <div className="sgcreator-item-box" key={i}>
              <div className="sgcreator-sample-box">
                <a href="#" className={`${prefix}${arr[0]} ${prefix}${item}`}>
                  Lorem impsum dolor emet
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {i === 0
                  ? `Common properties for all Links`
                  : `<a href="" class="${prefix}${
                      arr[0]
                    } ${prefix}${item}">Lorem impsum dolor emet</a>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${links[item]}`}</textarea>
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
    category: state.links,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Links);
