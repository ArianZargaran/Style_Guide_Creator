import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
import "codemirror/mode/css/css";

class Breadcrumbs extends Component {
  render() {
    const breadcrumbs = this.props.category.style;
    const prefix = this.props.appId.prefix;
    return (
      <section className="sgcreator-representation_section">
        <h1>Breadcrumbs</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(breadcrumbs).map(
            (item, i, arr) =>
              i === 0 ? (
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-sample-box">
                    <ul className={`${prefix}-${arr[0]}`}>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>Actual</li>
                    </ul>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<ul class="${prefix}-${arr[0]}>`}
                    {<br />}
                    {`    <li><a>Link 1</a></li>`}
                    {<br />}
                    {`    <li><a>Link 2</a></li>`}
                    {<br />}
                    {`    <li><a>Actual</a></li>`}
                    {<br />}
                    {`</ul>`}
                  </div>
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      options={{
                        mode: "css",
                        theme: "mdn-like",
                        autofocus: true
                      }}
                      value={breadcrumbs[item]}
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
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      options={{
                        mode: "css",
                        theme: "mdn-like"
                      }}
                      value={breadcrumbs[item]}
                      onChange={(editor, data, value) =>
                        this.onEditorChange(item, value)
                      }
                    />
                    <p className="sgcreator-selector sgcreator-selector sgcreator-selector_close">
                      }
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
    this.props.changeBreadcrumbsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.breadcrumbs,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeBreadcrumbsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
