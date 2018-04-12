import React, { Component } from "react";
import { connect } from "react-redux";

class Headers extends Component {
  render() {
    const headers = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Headers</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(headers).map((item, i, arr) => (
            <div className="sgcreator-item-box" key={item}>
              <div className="sgcreator-sample-box">
                <p className={`${prefix}${arr[0]} ${prefix}${item}`}>
                  Lorem Ipsum
                </p>
              </div>
              <div className="sgcreator-tag-box">
                {i === 0
                  ? `Common properties for all Headers`
                  : `<h${i} class="${prefix}${
                      arr[0]
                    } ${prefix}${item}">Lorem Ipsum</h${i}>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${headers[item]}`}</textarea>
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
    category: state.headers,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Headers);
