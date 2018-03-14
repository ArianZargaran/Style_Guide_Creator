import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_el } from "../actions";

class Index extends Component {
  render() {
    const { children = "Mockup Title" } = this.props;

    return (
      <section>
        <h1>
          <a>{children}</a>
        </h1>
        <ol>{this.renderIndexList()}</ol>
      </section>
    );
  }

  renderIndexList() {
    return this.props.list.map((elem, idx) => {
      return (
        <a key={elem.section} onClick={this.onElClick.bind(this, elem)}>
          <li>{elem.section}</li>
        </a>
      );
    });
  }

  onElClick(el) {
    this.props.fetch_el(el);
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps, { fetch_el })(Index);
