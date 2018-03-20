import React, { Component } from "react";
import { connect } from "react-redux";

class EditorialHeader extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.editorialHeader.section}</h1>
        {Object.keys(this.props.list.editorialHeader.className).map(
          (item, i) => (
            <div key={i}>
              <p className={this.props.list.editorialHeader.className[item]}>
                Lorem impsum dolor emet
              </p>
              <div className="box">{`<${
                this.props.list.editorialHeader.tag
              } class="${
                this.props.list.editorialHeader.className[item]
              }">Lorem impsum dolor emet</${
                this.props.list.editorialHeader.tag
              }>`}</div>
            </div>
          )
        )}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(EditorialHeader);
