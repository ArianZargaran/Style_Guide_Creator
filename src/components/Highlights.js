import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class List extends Component {
  render() {
    return (
      <div className="sgcreator-hook">
        <Categories />
        <section className="sgcreator-visualization">
          <h1>{this.props.list.typography.section}</h1>
          {Object.keys(this.props.list.typography.className).map((item, i) => (
            <div key={i}>
              <p className={this.props.list.typography.className[item]}>
                Lorem impsum dolor emet
              </p>
              <div className="box">{`<${
                this.props.list.typography.tag
              } class="${
                this.props.list.typography.className[item]
              }">Lorem impsum dolor emet</${
                this.props.list.typography.tag
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

export default connect(mapStateToProps)(List);
