import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = "";
  }

  render() {
    const {
      item,
      prefix,
      selector,
      onEditorChange = (item, value) =>
        console.log(`Item returns ${item}`, `Value returns ${value}`),
      editorMounted = editor => console.log(`Editor returns ${editor}`)
    } = this.props;

    return (
      <div className="sgcreator-css-box">
        <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
        <CodeMirror
          ref={ed => (this.editorRef = ed)}
          options={{
            mode: "css",
            theme: "neo"
          }}
          value={selector[item]}
          editorDidMount={editor => editorMounted(editor)}
          onBeforeChange={(editor, data, value) => {
            onEditorChange(item, value);
          }}
        />
        <p className="sgcreator-selector sgcreator-selector sgcreator-selector_close">
          {"}"}
        </p>
      </div>
    );
  }
}
