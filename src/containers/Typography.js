import React, { Component } from "react";
import { connect } from "react-redux";

class Typography extends Component {
  render() {
    const typography = this.props.category.style;
    const prefix = this.props.appId.prefix;
    return (
      <section className="sgcreator-representation_section">
        <h1>Typography</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(typography).map((item, i) => (
            <div className="sgcreator-item-box" key={i}>
              <div className="sgcreator-sample-box">
                <p className={`${prefix}${item}`}>Lorem impsum dolor emet</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}${item}">Lorem impsum dolor emet</p>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${typography[item]}`}</textarea>
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
