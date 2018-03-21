import React, { Component } from "react";
import { connect } from "react-redux";

class FeaturedBlock extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.featuredBlock.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.featuredBlock.className).map(
            (item, i) => (
              <div
                className="sgcreator-item-box sgcreator-item-box_featured-block"
                itemID={i}
                key={i}
              >
                <div className="sgcreator-sample-box">
                  <p className={this.props.list.featuredBlock.className[item]}>
                    Lorem impsum dolor emet
                  </p>
                </div>
                <div className="sgcreator-tag-box">
                  {`<${this.props.list.featuredBlock.tag} class="${
                    this.props.list.featuredBlock.className[item]
                  }">Lorem impsum dolor emet</${
                    this.props.list.featuredBlock.tag
                  }>`}
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

export default connect(mapStateToProps)(FeaturedBlock);
