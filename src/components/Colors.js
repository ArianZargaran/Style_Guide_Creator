import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class Colors extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.colors.section}</h1>
        {Object.keys(this.props.list.colors.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.colors.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.colors.tag} class="${
              this.props.list.colors.className[item]
            }">Lorem impsum dolor emet</${this.props.list.colors.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Colors);
