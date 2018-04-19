import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeButtonStyles } from "../state/buttons/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
import "codemirror/mode/css/css";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const buttons = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(buttons);
    const commonProps = 1;

    return (
      <section className="sgcreator-representation_section">
        <h1>Buttons</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box sgcreator-item-box_buttons">
            <p className="sgcreator-tag-box">
              Common propperties to all Buttons
            </p>
          </div>
          {stylesList.map(
            (item, i, arr) =>
              i <= commonProps ? (
                <div key={item} className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    ref={ed => (this.editorRefs[i] = ed)}
                    options={{ mode: "css", theme: "neo" }}
                    value={buttons[item]}
                    onBeforeChange={(editor, data, value) => {
                      this.onEditorChange(item, value);
                    }}
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    {"}"}
                  </p>
                </div>
              ) : (
                <div
                  className="sgcreator-item-box sgcreator-item-box_buttons"
                  key={i}
                >
                  <div className="sgcreator-sample-box">
                    <button className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                      Learn more
                    </button>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<button class="${prefix}-${
                      arr[0]
                    } ${prefix}-${item}">Learn more</button>`}
                  </div>
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      ref={ed => (this.editorRefs[i] = ed)}
                      options={{ mode: "css", theme: "neo" }}
                      value={buttons[item]}
                      onBeforeChange={(editor, data, value) => {
                        this.onEditorChange(item, value);
                      }}
                    />
                    <p className="sgcreator-selector sgcreator-selector_close">
                      {"}"}
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
    this.props.changeButtonStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.buttons,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeButtonStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
