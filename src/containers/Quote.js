import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Quote extends Component {
  prefix = this.props.appId.prefix;

  render() {
    const quote = this.props.category.Quote;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(quote).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_quote"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={`${this.prefix}${quote[item]}`}>
                  <p>Lorem impsum dolor emet</p>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${this.prefix}quote">Lorem impsum dolor emet</p>`}
              </div>
            </div>
          ))}
        </div>

        <p>{this.state.style}</p>

        <Style>{this.state.style}</Style>
      </section>
    );
  }

  state = {
    style: `
.${this.prefix}quote {
  background: var(--color_secondary);
  font-size: calc(var(--h1_font-size));
  padding: 1px 20px 20px 20px;
  position: relative;
  z-index: -2;
}

.${this.prefix}quote p::before {
  content: "“";
  font-size: calc(var(--h1_font-size) + 100px);
  position: absolute;
  color: var(--color_background);
  z-index: -1;
  top: -10px;
  left: 0;
  opacity: 0.5;
}

.${this.prefix}quote p::after {
  content: "”";
  font-size: calc(var(--h1_font-size) + 100px);
  position: absolute;
  color: var(--color_background);
  z-index: -1;
  bottom: -110px;
  right: 0;
  opacity: 0.5;
}
  `
  };
}

function mapStateToProps(state) {
  return {
    category: state.quote,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Quote);
