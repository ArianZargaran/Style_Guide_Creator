import React, { Component } from "react";
import { connect } from "react-redux";

class Samples extends Component {
  render() {
    return (
      <section>
        <div>{this.renderSample()}</div>
      </section>
    );
  }

  renderSample() {
    if (!this.props.element) {
      return (
        <div>
          <h1>Select any element of the list to Get Started</h1>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.props.element.section}</h1>
        {Object.keys(this.props.element.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.element.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.element.tag} class="${
              this.props.element.className[item]
            }">Lorem impsum dolor emet</${this.props.element.tag}>`}</div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { element: state.element };
}

export default connect(mapStateToProps)(Samples);
