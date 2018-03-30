import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Headers.css";

class Headers extends Component {
  render() {
    const headers = this.props.category.Headers;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(headers.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_editorial-header"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={headers.className[item]}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<h${i + 1} class="${headers.className[item]}">${item}</h${i +
                  1}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.headers };
}

export default connect(mapStateToProps)(Headers);
