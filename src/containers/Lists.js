import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/sgcreator/sgcreator-item-box/sgcreator-lists.css";
import "../style/Lists.css";

class Lists extends Component {
  render() {
    const lists = this.props.category.Lists;
    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(lists.className).map((item, i) => {
            if (i === 0) {
              return (
                <div>
                  <div
                    className="sgcreator-item-box sgcreator-item-box_lists"
                    itemID={i}
                  >
                    <div className="sgcreator-sample-box">
                      <ul className={lists.className[item][0]}>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Dicta optio cumque dolore hic ea facilis</li>
                        <li>Minus, possimus, veniam, incidunt eligendi</li>
                      </ul>
                    </div>
                    <div className="sgcreator-tag-box">
                      {`<${lists.tag[i][0]} class="${
                        lists.className[item][0]
                      }">`}
                      {<br />}
                      {`    <li>Lorem ipsum dolor sit amet.</li>`}
                      {<br />}
                      {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                      {<br />}
                      {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                      {<br />}
                      {`</${lists.tag[i][0]}>`}
                    </div>
                  </div>
                  <div
                    className="sgcreator-item-box sgcreator-item-box_lists sgcreator-item-box_ol-lists"
                    itemID={i}
                  >
                    <div className="sgcreator-sample-box">
                      <ol className={lists.className[item][1]}>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Dicta optio cumque dolore hic ea facilis</li>
                        <li>Minus, possimus, veniam, incidunt eligendi</li>
                      </ol>
                    </div>
                    <div className="sgcreator-tag-box">
                      {`<${lists.tag[i][1]} class="${
                        lists.className[item][1]
                      }">`}
                      {<br />}
                      {`    <li>Lorem ipsum dolor sit amet.</li>`}
                      {<br />}
                      {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                      {<br />}
                      {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                      {<br />}
                      {`</${lists.tag[i][1]}>`}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div>
                <div
                  className="sgcreator-item-box sgcreator-item-box_lists sgcreator-item-box_ul-lists"
                  itemID={i}
                  key={i}
                >
                  <div className="sgcreator-sample-box">
                    <ul className={lists.className[item][0]}>
                      <li>
                        <a>Lorem ipsum dolor sit amet.</a>
                      </li>
                      <li>
                        <a>Dicta optio cumque dolore hic ea facilis</a>
                      </li>
                      <li>
                        <a>Minus, possimus, veniam, incidunt eligendi</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<${lists.tag[i][0]} class="${lists.className[item][0]}">`}
                    {<br />}
                    {`    <li><a href="/">Lorem ipsum dolor sit amet.</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Dicta optio cumque dolore hic ea facilis</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Minus, possimus, veniam, incidunt eligendi</a></li>`}
                    {<br />}
                    {`</${lists.tag[i][0]}>`}
                  </div>
                </div>
                <div
                  className="sgcreator-item-box sgcreator-item-box_lists sgcreator-item-box_ol-lists"
                  itemID={i}
                  key={i}
                >
                  <div className="sgcreator-sample-box">
                    <ol className={lists.className[item][1]}>
                      <li>
                        <a>Lorem ipsum dolor sit amet.</a>
                      </li>
                      <li>
                        <a>Dicta optio cumque dolore hic ea facilis</a>
                      </li>
                      <li>
                        <a>Minus, possimus, veniam, incidunt eligendi</a>
                      </li>
                    </ol>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<${lists.tag[i][1]} class="${lists.className[item][1]}">`}
                    {<br />}
                    {`    <li><a href="/">Lorem ipsum dolor sit amet.</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Dicta optio cumque dolore hic ea facilis</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Minus, possimus, veniam, incidunt eligendi</a></li>`}
                    {<br />}
                    {`</${lists.tag[i][1]}>`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.lists };
}

export default connect(mapStateToProps)(Lists);