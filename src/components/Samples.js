import React, { Component } from "react";
import { connect } from "react-redux";

class Samples extends Component {
  render() {
    return (
      <section>
        <ul>{this.renderSample()}</ul>
      </section>
    );
  }

  renderSample() {
    return (
      <li>
        <p>{this.props.element.section}</p>
        <p>{this.props.element.tag}</p>
        <p>{this.props.element.className}</p>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return { element: state.element };
}

export default connect(mapStateToProps)(Samples);
