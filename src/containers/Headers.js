import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/Headers.css";

class Headers extends Component {
  render() {
    const headers = this.props.category.Headers;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Headers</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(headers).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_editorial-header"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={headers[item]}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<h${i + 1} class="${prefix}${headers[item]}">${item}</h${i +
                  1}>`}
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
    category: state.headers,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Headers);
