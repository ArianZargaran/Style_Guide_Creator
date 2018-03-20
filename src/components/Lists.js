import React, { Component } from "react";
import { connect } from "react-redux";

class Lists extends Component {
  render() {
    return (
      <section className="sgcreator-visualization">
        <h1>{this.props.list.lists.section}</h1>
        {Object.keys(this.props.list.lists.className).map((item, i) => (
          <div className="sgcreator-sample-box">
            <div className="sgcreator-sample-box_background">
              <ol>
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
              {`  <li>Lorem ipsum dolor sit amet.</li>`}
              {<br />}
              {`  <li>Dicta optio cumque dolore hic ea facilis</li>`}
              {<br />}
              {`  <li>Minus, possimus, veniam, incidunt eligendi</li>`}
              {<br />}
              {`</${this.props.list.lists.tag[i]}>`}
            </div>
          </div>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Lists);