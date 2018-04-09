import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-lists.css";

class Lists extends Component {
  render() {
    const lists = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Lists</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(lists).map((item, i, arr) => {
            return (
              <div
                className="sgcreator-item-box sgcreator-item-box_lists"
                key={i}
              >
                <div className="sgcreator-sample-box">
                  <ul className={`${prefix}${arr[0]} ${prefix}${item}`}>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Dicta optio cumque dolore hic ea facilis</li>
                    <li>Minus, possimus, veniam, incidunt eligendi</li>
                  </ul>
                </div>
                <div className="sgcreator-tag-box">
                  {i === 0 ? `<ul class="${prefix}${item}">` : ``}
                  {i === 1
                    ? `<ul class="${prefix}${arr[0]} ${prefix}${item}">`
                    : ``}
                  {i === 2
                    ? `<ol class="${prefix}${arr[0]} ${prefix}${item}">`
                    : ``}
                  {<br />}
                  {`    <li>Lorem ipsum dolor sit amet.</li>`}
                  {<br />}
                  {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                  {<br />}
                  {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                  {<br />}
                  {i === 2 ? `</ol>` : `</ul>`}
                </div>
                <div className="sgcreator-css-box">
                  <textarea>{`.${prefix}${lists[item]}`}</textarea>
                </div>
                <Style>{`.${prefix}${lists[item]}`}</Style>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.lists,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Lists);
