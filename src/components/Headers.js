import React, { Component } from "react";
import { connect } from "react-redux";

class Headers extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.headers.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.headers.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_editorial-header"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={this.props.list.headers.className[item]}>
                  {item}
                </p>
              </div>
              <div className="sgcreator-tag-box">
                {`<h${i + 1} class="${
                  this.props.list.headers.className[item]
                }">${item}</h${i + 1}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.headers };
}

export default connect(mapStateToProps)(Headers);
