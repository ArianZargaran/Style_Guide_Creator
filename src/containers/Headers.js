import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Headers extends Component {
  render() {
    const headers = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Headers</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box">
            <div className="sgcreator-sample-box">
              <h1 className={`${prefix} header`}>Lorem Ipsum</h1>
            </div>
            <div className="sgcreator-tag-box">{`<h1 class="${prefix}header">Lorem Ipsum</h1>`}</div>
            <div className="sgcreator-css-box">
              <textarea>{headers.common}</textarea>
            </div>
          </div>
          {Object.keys(headers).map(
            (item, i) =>
              i === 0 ? (
                ""
              ) : (
                <div className="sgcreator-item-box" itemID={i} key={i}>
                  <div className="sgcreator-sample-box">
                    <h1 className={`${prefix}${item}`}>Lorem Ipsum</h1>
                  </div>
                  <div className="sgcreator-tag-box">{`<h${i} class="${prefix}${item}">Lorem Ipsum</h${i}>`}</div>
                  <div className="sgcreator-css-box">
                    <textarea>{headers[item]}</textarea>
                  </div>
                  <Style>{headers[item]}</Style>
                </div>
              )
          )}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.headers,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Headers);
