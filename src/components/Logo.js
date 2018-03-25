import React, { Component } from "react";
import { connect } from "react-redux";

class Logo extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.logo.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.logo.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_logo"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <i className={this.props.list.logo.className[item]} />
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.logo.tag} class="${
                  this.props.list.logo.className[item]
                }">${item}</${this.props.list.logo.tag}>`}
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

export default connect(mapStateToProps)(Logo);
