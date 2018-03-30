import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-colors.css";
import "../style/Colors.css";

class Colors extends Component {
  render() {
    const colors = this.props.category.Colors;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(colors.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_colors"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={colors.className[item]}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<${colors.tag} class="${colors.className[item]}"></${
                  colors.tag
                }>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.colors };
}

export default connect(mapStateToProps)(Colors);
