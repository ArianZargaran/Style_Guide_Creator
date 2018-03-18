import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.table.section}</h1>
        {Object.keys(this.props.list.table.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.table.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.table.tag} class="${
              this.props.list.table.className[item]
            }">Lorem impsum dolor emet</${this.props.list.table.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Table);
