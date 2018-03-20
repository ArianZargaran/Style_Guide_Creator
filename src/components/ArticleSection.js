import React, { Component } from "react";
import { connect } from "react-redux";

class ArticleSection extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.articleSection.section}</h1>
        {Object.keys(this.props.list.articleSection.className).map(
          (item, i) => (
            <div key={i}>
              <p className={this.props.list.articleSection.className[item]}>
                Lorem impsum dolor emet
              </p>
              <div className="box">{`<${
                this.props.list.articleSection.tag
              } class="${
                this.props.list.articleSection.className[item]
              }">Lorem impsum dolor emet</${
                this.props.list.articleSection.tag
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

export default connect(mapStateToProps)(ArticleSection);
