import React, { Component } from "react";
import { connect } from "react-redux";

class Quote extends Component {
  render() {
    const quote = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Quote</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(quote).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_quote"
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={`${prefix}${item}`}>
                  <p>Lorem impsum dolor emet</p>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}${item}">Lorem impsum dolor emet</p>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${quote[item]}`}</textarea>
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
    category: state.quote,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Quote);
