import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class Grid extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.grid.section}</h1>
        {Object.keys(this.props.list.grid.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.grid.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.grid.tag} class="${
              this.props.list.grid.className[item]
            }">Lorem impsum dolor emet</${this.props.list.grid.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Grid);
