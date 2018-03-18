import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class PageHeader extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.pageHeader.section}</h1>
        {Object.keys(this.props.list.pageHeader.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.pageHeader.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.pageHeader.tag} class="${
              this.props.list.pageHeader.className[item]
            }">Lorem impsum dolor emet</${
              this.props.list.pageHeader.tag
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

export default connect(mapStateToProps)(PageHeader);
