import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Links extends Component {
  render() {
    const links = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Links</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(links).map((item, i, arr) => (
            <div className="sgcreator-item-box" key={i}>
              <div className="sgcreator-sample-box">
                <a href="#" className={`${prefix}${arr[0]} ${prefix}${item}`}>
                  Lorem impsum dolor emet
                </a>
              </div>
              <div className="sgcreator-tag-box">
                {i === 0
                  ? `Common properties for all Links`
                  : `<a href="" class="${prefix}${
                      arr[0]
                    } ${prefix}${item}">Lorem impsum dolor emet</a>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${links[item]}`}</textarea>
              </div>
              <Style>{`.${prefix}${links[item]}`}</Style>
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
