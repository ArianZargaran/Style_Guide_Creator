import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Icons extends Component {
  render() {
    const icons = this.props.category.Icons;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Icons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(icons).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_icons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <i className={icons[item]} />
              </div>
              <div className="sgcreator-tag-box">
                {`<i class="${prefix}${icons[item]}">${item}</i>`}
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
    category: state.icons,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Icons);
