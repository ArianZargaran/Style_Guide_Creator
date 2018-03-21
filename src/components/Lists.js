import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/sgcreator/sgcreator-item-box/sgcreator-lists.css";

class Lists extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.lists.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.lists.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_lists"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <ol className={this.props.list.lists.className[item]}>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Dicta optio cumque dolore hic ea facilis</li>
                  <li>Minus, possimus, veniam, incidunt eligendi</li>
                </ol>
              </div>
              <div className="sgcreator-tag-box">
                {`<${this.props.list.lists.tag[i]} class="${
                  this.props.list.lists.className[item]
                }">`}
                {<br />}
                {`    <li>Lorem ipsum dolor sit amet.</li>`}
                {<br />}
                {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                {<br />}
                {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                {<br />}
                {`</${this.props.list.lists.tag[i]}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Lists);
