import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/Featured_icons.css";

class FeaturedIcons extends Component {
  render() {
    const ficons = this.props.category["Featured Icons"];
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Featured Icons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(ficons.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_featured-icons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <a href="#">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className={ficons.className[item]} />
                  </span>
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {`<span class="fa-stack fa-2x">`}
                {<br />}
                {`    <i class="fas fa-circle fa-stack-2x"></i>`}
                {<br />}
                {`    <i class="${prefix}${ficons.className[item]}"></i>`}
                {<br />}
                {`</span>`}
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
    category: state.featured_icons,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(FeaturedIcons);
