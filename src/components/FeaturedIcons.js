import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class FeaturedIcons extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.featuredIcons.section}</h1>
        {Object.keys(this.props.list.featuredIcons.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.featuredIcons.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${
              this.props.list.featuredIcons.tag
            } class="${
              this.props.list.featuredIcons.className[item]
            }">Lorem impsum dolor emet</${
              this.props.list.featuredIcons.tag
            }>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(FeaturedIcons);
