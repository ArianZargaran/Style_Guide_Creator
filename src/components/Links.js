import React, { Component } from "react";
import { connect } from "react-redux";

class Links extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.links.section}</h1>
        {Object.keys(this.props.list.links.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.links.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.links.tag} class="${
              this.props.list.links.className[item]
            }">Lorem impsum dolor emet</${this.props.list.links.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Links);
