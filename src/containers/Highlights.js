import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/sgcreator-item-box/sgcreator-highlights.css";

class Highlights extends Component {
  render() {
    const highlights = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Highlights</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(highlights).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_highlights sgcreator-align-left"
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={highlights[item]}>
                  <h1>Highlight {i}</h1>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<div class="${prefix}${item}">`}
                {<br />}
                {`    <h1>Highlight ${i}</h1>`}
                {<br />}
                {`</div>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${highlights[item]}`}</textarea>
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
    category: state.highlights,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Highlights);
