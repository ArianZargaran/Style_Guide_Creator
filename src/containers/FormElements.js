import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Typography.css";

class Typography extends Component {
  render() {
    const typography = this.props.category.Typography;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(typography).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_typography"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={typography[item]}>Lorem impsum dolor emet</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}${
                  typography[item]
                }">Lorem impsum dolor emet</p>`}
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
    category: state.typography,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Typography);
