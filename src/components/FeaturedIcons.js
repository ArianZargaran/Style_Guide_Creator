import React, { Component } from "react";
import { connect } from "react-redux";

class FeaturedIcons extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.featuredIcons.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.featuredIcons.className).map(
            (item, i) => (
              <div
                className="sgcreator-item-box sgcreator-item-box_featured-icons"
                itemID={i}
                key={i}
              >
                <div className="sgcreator-sample-box">
                  <a href="/">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i
                        className={
                          this.props.list.featuredIcons.className[item]
                        }
                      />
                    </span>
                  </a>
                </div>
                <div className="sgcreator-tag-box sgcreator-align-left">
                  {`<${
                    this.props.list.featuredIcons.tag
                  } class="fa-stack fa-2x">`}
                  {<br />}
                  {`    <i class="fas fa-circle fa-stack-2x"></i>`}
                  {<br />}
                  {`    <i class="${
                    this.props.list.featuredIcons.className[item]
                  }"></i>`}
                  {<br />}
                  {`</${this.props.list.featuredIcons.tag}>`}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(FeaturedIcons);
