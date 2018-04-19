import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
import "codemirror/mode/css/css";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const breadcrumbs = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(breadcrumbs);

    return (
      <section className="sgcreator-representation_section">
        <h1>Breadcrumbs</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box">
            <div className="sgcreator-sample-box">
              <ul className={`${prefix}-breadcrumbs`}>
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
              {`<ul class="${prefix}-breadcrumbs>`}
              {<br />}
              {`    <li><a>Link 1</a></li>`}
              {<br />}
              {`    <li><a>Link 2</a></li>`}
              {<br />}
              {`    <li><a>Actual</a></li>`}
              {<br />}
              {`</ul>`}
            </div>
            {stylesList.map((item, i, arr) => (
              <div className="sgcreator-css-box" key={item}>
                <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                <CodeMirror
                  ref={ed => (this.editorRefs[i] = ed)}
                  options={{
                    mode: "css",
                    theme: "neo"
                  }}
                  value={breadcrumbs[item]}
                  onBeforeChange={(editor, data, value) => {
                    this.onEditorChange(item, value);
                  }}
                />
                <p className="sgcreator-selector sgcreator-selector sgcreator-selector_close">
                  {"}"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
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
