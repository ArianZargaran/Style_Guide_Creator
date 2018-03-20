import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class GuidesSection extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.guidesSection.section}</h1>
        {Object.keys(this.props.list.guidesSection.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.guidesSection.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${
              this.props.list.guidesSection.tag
            } class="${
              this.props.list.guidesSection.className[item]
            }">Lorem impsum dolor emet</${
              this.props.list.guidesSection.tag
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

export default connect(mapStateToProps)(GuidesSection);
