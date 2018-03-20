import React, { Component } from "react";
import { connect } from "react-redux";

class Buttons extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.buttons.section}</h1>
        {Object.keys(this.props.list.buttons.className).map((item, i) => (
          <div key={i} className={`sgcreator-sample-box_wrapper`} itemID={i}>
            <div className="sgcreator-sample-box">
              <div className="sgcreator-sample-box_background">
                <a className={this.props.list.buttons.className[item]}>
                  Learn more
                </a>
              </div>
            </div>
            <div className="sgcreator-tag-box">
              {`<${this.props.list.buttons.tag} href="/" class="${
                this.props.list.buttons.className[item]
              }">Learn more</${this.props.list.buttons.tag}>`}
            </div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Buttons);
