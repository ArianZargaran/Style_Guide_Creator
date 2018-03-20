import React, { Component } from "react";
import { connect } from "react-redux";

class Quote extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.quote.section}</h1>
        {Object.keys(this.props.list.quote.className).map((item, i) => (
          <div key={i}>
            <p className={this.props.list.quote.className[item]}>
              Lorem impsum dolor emet
            </p>
            <div className="box">{`<${this.props.list.quote.tag} class="${
              this.props.list.quote.className[item]
            }">Lorem impsum dolor emet</${this.props.list.quote.tag}>`}</div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Quote);
