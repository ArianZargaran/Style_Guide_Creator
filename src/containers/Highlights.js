import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-highlights.css";
import "../style/Highlights.css";

class Highlights extends Component {
  render() {
    const highlights = this.props.category.Highlights;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(highlights.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_highlights sgcreator-align-left"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={highlights.className[item]}>
                  <h1>{`This is a ${item}`}</h1>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<${highlights.tag} class="${highlights.className[item]}">`}
                {<br />}
                {`    <h1>This is a ${item}</h1>`}
                {<br />}
                {`</${highlights.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.highlights };
}

export default connect(mapStateToProps)(Highlights);
