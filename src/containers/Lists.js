import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeListsStyles } from "../state/lists/action-creators";
import "codemirror/mode/css/css";
import "../style/sgcreator-item-box/sgcreator-lists.css";

class Lists extends Component {
  render() {
    const lists = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Lists</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(lists).map((item, i, arr) => {
            return i === 0 ? (
              <div
                className="sgcreator-item-box sgcreator-item-box_lists"
                key={i}
              >
                <div className="sgcreator-tag-box">
                  {"Common properties to all Lists"}
                </div>
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "mdn-like" }}
                    value={lists[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    }
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="sgcreator-item-box sgcreator-item-box_lists"
                key={i}
              >
                <div className="sgcreator-sample-box">
                  <ul className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Dicta optio cumque dolore hic ea facilis</li>
                    <li>Minus, possimus, veniam, incidunt eligendi</li>
                  </ul>
                </div>
                <div className="sgcreator-tag-box">
                  {i === 1
                    ? `<ul class="${prefix}-${arr[0]} ${prefix}-${item}">`
                    : `<ol class="${prefix}-${arr[0]} ${prefix}-${item}">`}
                  {<br />}
                  {`    <li>Lorem ipsum dolor sit amet.</li>`}
                  {<br />}
                  {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                  {<br />}
                  {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                  {<br />}
                  {i === 1 ? `</ul>` : `</ol>`}
                </div>
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "mdn-like" }}
                    value={lists[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
    this.props.changeListsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.lists,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeListsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
