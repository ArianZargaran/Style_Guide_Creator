import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Quote extends Component {
  render() {
    const quote = this.props.category;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Quote</h1>
        <div className="sgcreator-representation_wrapper">
          {this.state.classes.map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_quote"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={item}>
                  <p>Lorem impsum dolor emet</p>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}${item}">Lorem impsum dolor emet</p>`}
              </div>
              <div className="sgcreator-css-box">
                <p>{`Set new stylling for: ${this.capitalizeInitial(item)}`}</p>
                <textarea />
              </div>
            </div>
          ))}
        </div>

        <Style>{quote.style}</Style>
      </section>
    );
  }

  state = {
    classes: ["quote"]
  };

  capitalizeInitial(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function mapStateToProps(state) {
  return {
    category: state.quote,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Quote);
