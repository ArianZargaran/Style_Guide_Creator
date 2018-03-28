import React, { Component } from "react";
import { connect } from "react-redux";

class Quote extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.quote.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.quote.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_quote"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <div className={this.props.list.quote.className[item]}>
                  <p>Lorem impsum dolor emet</p>
                </div>
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.quote.tag} class="${
                  this.props.list.quote.className[item]
                }">Lorem impsum dolor emet</${this.props.list.quote.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Quote);
