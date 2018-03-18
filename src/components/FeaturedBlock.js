import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class FeaturedBlock extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.featuredBlock.section}</h1>
        {Object.keys(this.props.list.featuredBlock.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.featuredBlock.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${
              this.props.list.featuredBlock.tag
            } class="${
              this.props.list.featuredBlock.className[item]
            }">Lorem impsum dolor emet</${
              this.props.list.featuredBlock.tag
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

export default connect(mapStateToProps)(FeaturedBlock);
