import React, { Component } from "react";
import { connect } from "react-redux";

class Icons extends Component {
  render() {
    const icons = this.props.category.Icons;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(icons.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_icons"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <i className={icons.className[item]} />
              </div>
              <div className="sgcreator-tag-box">
                {`<${icons.tag} class="${icons.className[item]}">${item}</${
                  icons.tag
                }>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.icons };
}

export default connect(mapStateToProps)(Icons);
