import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeColorsStyles } from "../state/colors/action-creators";
import "codemirror/mode/css/css";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const colors = this.props.category.style;
    const stylesList = Object.keys(colors);
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Colors</h1>
        <div className="sgcreator-representation_wrapper">
          {stylesList.map((item, i) => (
            <div className="sgcreator-item-box" key={item}>
              <div className="sgcreator-sample-box">
                <p className={`${prefix}-${item}`}>{item}</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<div class="${prefix}-${item}"></div>`}
              </div>
              <div className="sgcreator-css-box">
                <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                <CodeMirror
                  ref={ed => (this.editorRefs[i] = ed)}
                  options={{ mode: "css", theme: "neo" }}
                  value={colors[item]}
                  onBeforeChange={(editor, data, value) => {
                    this.onEditorChange(item, value);
                  }}
                />
                <p className="sgcreator-selector sgcreator-selector_close">}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    this.props.changeColorsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.colors,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeColorsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
