import React, { Component } from "react";
import { connect } from "react-redux";

class FeaturedIcons extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.featured_icons.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.featured_icons.className).map(
            (item, i) => (
              <div
                className="sgcreator-item-box sgcreator-item-box_featured-icons"
                itemID={i}
                key={i}
              >
                <div className="sgcreator-sample-box">
                  <a href="#">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i
                        className={
                          this.props.list.featured_icons.className[item]
                        }
                      />
                    </span>
                  </a>
                </div>
                <div className="sgcreator-tag-box sgcreator-align-left">
                  {`<${
                    this.props.list.featured_icons.tag
                  } class="fa-stack fa-2x">`}
                  {<br />}
                  {`    <i class="fas fa-circle fa-stack-2x"></i>`}
                  {<br />}
                  {`    <i class="${
                    this.props.list.featured_icons.className[item]
                  }"></i>`}
                  {<br />}
                  {`</${this.props.list.featured_icons.tag}>`}
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
  return { list: state.featured_icons };
}

export default connect(mapStateToProps)(FeaturedIcons);
