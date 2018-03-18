import React, { Component } from "react";
import { connect } from "react-redux";

class Icons extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.icons.section}</h1>
        {Object.keys(this.props.list.icons.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.icons.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.icons.tag} class="${
              this.props.list.icons.className[item]
            }">Lorem impsum dolor emet</${this.props.list.icons.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Icons);
