import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Quote.css";

class Quote extends Component {
  render() {
    const quote = this.props.category.Quote;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(quote.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_quote"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={quote.className[item]}>
                  <p>Lorem impsum dolor emet</p>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<${quote.tag} class="${
                  quote.className[item]
                }">Lorem impsum dolor emet</${quote.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.quote };
}

export default connect(mapStateToProps)(Quote);
