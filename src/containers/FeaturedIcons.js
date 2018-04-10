import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class FeaturedIcons extends Component {
  render() {
    const ficons = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Featured Icons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(ficons).map(
            (item, i, arr) =>
              i === 0 ? (
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-sample-box" />
                  <div className="sgcreator-tag-box">
                    {`Properties common for all Featured Icons`}
                  </div>
                  <div className="sgcreator-css-box">
                    <textarea>{`.${prefix}${ficons[item]}`}</textarea>
                  </div>
                  <Style>{`.${prefix}${ficons[item]}`}</Style>
                </div>
              ) : (
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-sample-box">
                    <a href="#">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className={`${prefix}${arr[0]} ${prefix}${item}`} />
                      </span>
                    </a>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<span class="fa-stack fa-2x">`}
                    {<br />}
                    {`    <i class="fas fa-circle fa-stack-2x"></i>`}
                    {<br />}
                    {i > 1
                      ? `    <i class="${prefix}${
                          arr[0]
                        } ${prefix}${item}"></i>`
                      : `    <i class="${prefix}${item}"></i>`}
                    {<br />}
                    {`</span>`}
                  </div>
                  <div className="sgcreator-css-box">
                    <textarea>{`.${prefix}${ficons[item]}`}</textarea>
                  </div>
                  <Style>{`.${prefix}${ficons[item]}`}</Style>
                </div>
              )
          )}
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
