import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/sgcreator/sgcreator-item-box/sgcreator-highlights.css";

class Highlights extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.highlights.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.highlights.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_highlights sgcreator-align-left"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={this.props.list.highlights.className[item]}>
                  <h1>{`This is a ${item}`}</h1>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.highlights.tag} class="${
                  this.props.list.highlights.className[item]
                }">`}
                {<br />}
                {`    <h1>This is a ${item}</h1>`}
                {<br />}
                {`</${this.props.list.highlights.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Highlights);
