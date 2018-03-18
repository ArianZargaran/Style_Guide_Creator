import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class FeaturedList extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.featuredList.section}</h1>
        {Object.keys(this.props.list.featuredList.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.featuredList.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${
              this.props.list.featuredList.tag
            } class="${
              this.props.list.featuredList.className[item]
            }">Lorem impsum dolor emet</${
              this.props.list.featuredList.tag
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

export default connect(mapStateToProps)(FeaturedList);
