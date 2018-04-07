import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/Links.css";

class Links extends Component {
  render() {
    const links = this.props.category.Links;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Links</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(links).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_links"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <a href="" className={links[item]}>
                  Lorem impsum dolor emet
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {`<a href="" class="${prefix}${
                  links[item]
                }">Lorem impsum dolor emet</a>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea />
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
    category: state.links,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Links);
