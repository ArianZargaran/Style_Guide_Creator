import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class FeaturedSpotlight extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.featuredSpotlight.section}</h1>
        {Object.keys(this.props.list.featuredSpotlight.className).map(
          (item, i) => (
            <div key={i}>
              <p className={this.props.list.featuredSpotlight.className[item]}>
                Lorem impsum dolor emet
              </p>
              <div className="box">{`<${
                this.props.list.featuredSpotlight.tag
              } class="${
                this.props.list.featuredSpotlight.className[item]
              }">Lorem impsum dolor emet</${
                this.props.list.featuredSpotlight.tag
              }>`}</div>
            </div>
          )
        )}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(FeaturedSpotlight);
