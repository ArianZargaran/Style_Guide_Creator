import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class Breadcrumbs extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.breadcrumbs.section}</h1>
        {Object.keys(this.props.list.breadcrumbs.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.breadcrumbs.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.breadcrumbs.tag} class="${
              this.props.list.breadcrumbs.className[item]
            }">Lorem impsum dolor emet</${
              this.props.list.breadcrumbs.tag
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

export default connect(mapStateToProps)(Breadcrumbs);
