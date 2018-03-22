import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/sgcreator/sgcreator-item-box/sgcreator-lists.css";

class Lists extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.lists.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.lists.className).map((item, i) => {
            if (i === 0) {
              return (
                <div>
                  <div
                    className="sgcreator-item-box sgcreator-item-box_lists"
                    itemID={i}
                    key={i}
                  >
                    <div className="sgcreator-sample-box">
                      <ul className={this.props.list.lists.className[item][0]}>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Dicta optio cumque dolore hic ea facilis</li>
                        <li>Minus, possimus, veniam, incidunt eligendi</li>
                      </ul>
                    </div>
                    <div className="sgcreator-tag-box">
                      {`<${this.props.list.lists.tag[i][0]} class="${
                        this.props.list.lists.className[item][0]
                      }">`}
                      {<br />}
                      {`    <li>Lorem ipsum dolor sit amet.</li>`}
                      {<br />}
                      {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                      {<br />}
                      {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                      {<br />}
                      {`</${this.props.list.lists.tag[i][0]}>`}
                    </div>
                  </div>
                  <div
                    className="sgcreator-item-box sgcreator-item-box_lists sgcreator-item-box_ol-lists"
                    itemID={i}
                    key={i}
                  >
                    <div className="sgcreator-sample-box">
                      <ol className={this.props.list.lists.className[item][1]}>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Dicta optio cumque dolore hic ea facilis</li>
                        <li>Minus, possimus, veniam, incidunt eligendi</li>
                      </ol>
                    </div>
                    <div className="sgcreator-tag-box">
                      {`<${this.props.list.lists.tag[i][1]} class="${
                        this.props.list.lists.className[item][1]
                      }">`}
                      {<br />}
                      {`    <li>Lorem ipsum dolor sit amet.</li>`}
                      {<br />}
                      {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                      {<br />}
                      {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                      {<br />}
                      {`</${this.props.list.lists.tag[i][1]}>`}
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
                    <ul className={this.props.list.lists.className[item][0]}>
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
                    {`<${this.props.list.lists.tag[i][0]} class="${
                      this.props.list.lists.className[item][0]
                    }">`}
                    {<br />}
                    {`    <li><a href="/">Lorem ipsum dolor sit amet.</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Dicta optio cumque dolore hic ea facilis</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Minus, possimus, veniam, incidunt eligendi</a></li>`}
                    {<br />}
                    {`</${this.props.list.lists.tag[i][0]}>`}
                  </div>
                </div>
                <div
                  className="sgcreator-item-box sgcreator-item-box_lists sgcreator-item-box_ol-lists"
                  itemID={i}
                  key={i}
                >
                  <div className="sgcreator-sample-box">
                    <ol className={this.props.list.lists.className[item][1]}>
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
                    {`<${this.props.list.lists.tag[i][1]} class="${
                      this.props.list.lists.className[item][1]
                    }">`}
                    {<br />}
                    {`    <li><a href="/">Lorem ipsum dolor sit amet.</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Dicta optio cumque dolore hic ea facilis</a></li>`}
                    {<br />}
                    {`    <li><a href="/">Minus, possimus, veniam, incidunt eligendi</a></li>`}
                    {<br />}
                    {`</${this.props.list.lists.tag[i][1]}>`}
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
  return { list: state.list };
}

export default connect(mapStateToProps)(Lists);
