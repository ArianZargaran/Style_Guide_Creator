import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Links.css";

class Links extends Component {
  render() {
    const links = this.props.category.Links;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(links.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_links"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <a href="#" className={links.className[item]}>
                  Lorem impsum dolor emet
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {`<${links.tag} href="/" class="${
                  links.className[item]
                }">Lorem impsum dolor emet</${links.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.links };
}

export default connect(mapStateToProps)(Links);
