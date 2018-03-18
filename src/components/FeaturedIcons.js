import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class Buttons extends Component {
  render() {
    return (
      <div className="sgcreator-hook">
        <Categories />
        <section className="sgcreator-visualization">
          <h1>{this.props.list.buttons.section}</h1>
          {Object.keys(this.props.list.buttons.className).map((item, i) => (
            <div key={i}>
              <p className={this.props.list.buttons.className[item]}>
                Lorem impsum dolor emet
              </p>
              <div className="box">{`<${this.props.list.buttons.tag} class="${
                this.props.list.buttons.className[item]
              }">Lorem impsum dolor emet</${
                this.props.list.buttons.tag
              }>`}</div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Buttons);
