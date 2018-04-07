import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Typography extends Component {
  render() {
    const typography = this.props.category;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Typography</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(typography.style).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_typography"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <p className={item}>Lorem impsum dolor emet</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}${item}">Lorem impsum dolor emet</p>`}
              </div>
              <div className="sgcreator-css-box">
                <p>{`Set new stylling for: ${this.capitalizeInitial(item)}`}</p>
                <textarea>{typography.style[item]}</textarea>
              </div>
            </div>
          ))}
        </div>
        <Style>{typography.style}</Style>
      </section>
    );
  }

  capitalizeInitial(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function mapStateToProps(state) {
  return {
    category: state.typography,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Typography);
