import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class Lists extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.lists.section}</h1>
        {Object.keys(this.props.list.lists.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.lists.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.lists.tag} class="${
              this.props.list.lists.className[item]
            }">Lorem impsum dolor emet</${this.props.list.lists.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Lists);
