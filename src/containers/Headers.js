import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeHeadersStyles } from "../state/headers/action-creators";
import "codemirror/mode/css/css";

class Headers extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const headers = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(headers);
    const commonProps = 0;

    return (
      <section className="sgcreator-representation_section">
        <h1>Headers</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box">
            <p className="sgcreator-tag-box">
              Common properties to all Headers
            </p>
            {stylesList.map(
              (item, i, arr) =>
                i === commonProps ? (
                  <div key={item} className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      ref={ed => (this.editorRefs[i] = ed)}
                      options={{ mode: "css", theme: "neo" }}
                      value={headers[item]}
                      editorDidMount={editor => editor.focus()}
                      onBeforeChange={(editor, data, value) => {
                        this.onEditorChange(item, value);
                      }}
                    />
                    <p className="sgcreator-selector sgcreator-selector_close">
                      {`}`}
                    </p>
                  </div>
                ) : (
                  <div className="sgcreator-item-box" key={item}>
                    <div className="sgcreator-sample-box">
                      <p className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                        Lorem Ipsum
                      </p>
                    </div>
                    <div className="sgcreator-tag-box">
                      {`<h${i} class="${prefix}-${
                        arr[0]
                      } ${prefix}-${item}">Lorem Ipsum</h${i}>`}
                    </div>
                    <div className="sgcreator-css-box">
                      <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                      <CodeMirror
                        options={{ mode: "css", theme: "neo" }}
                        value={headers[item]}
                        onBeforeChange={(editor, data, value) => {
                          this.onEditorChange(item, value);
                        }}
                      />
                      <p className="sgcreator-selector sgcreator-selector_close">
                        {`}`}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    this.props.changeHeadersStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.headers,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHeadersStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
