import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/sgcreator/sgcreator-item-box/sgcreator-colors.css";

class Colors extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.colors.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.colors.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_colors"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={this.props.list.colors.className[item]}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.colors.tag} class="${
                  this.props.list.colors.className[item]
                }"></${this.props.list.colors.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.colors };
}

export default connect(mapStateToProps)(Colors);
