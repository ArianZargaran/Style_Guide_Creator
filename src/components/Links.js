import React, { Component } from "react";
import { connect } from "react-redux";

class Links extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.links.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.links.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_links"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <a href="" className={this.props.list.links.className[item]}>
                  Lorem impsum dolor emet
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.links.tag} href="/" class="${
                  this.props.list.links.className[item]
                }">Lorem impsum dolor emet</${this.props.list.links.tag}>`}
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

export default connect(mapStateToProps)(Links);
