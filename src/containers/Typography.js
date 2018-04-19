import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeTypographyStyles } from "../state/typography/action-creators";
import "codemirror/mode/css/css";

class Typography extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const typography = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(typography);
    return (
      <section className="sgcreator-representation_section">
        <h1>Typography</h1>
        <div className="sgcreator-representation_wrapper">
          {stylesList.map((item, i) => (
            <div className="sgcreator-item-box" key={item}>
              <div className="sgcreator-sample-box">
                <p className={`${prefix}-${item}`}>Lorem impsum dolor emet</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}-${item}">Lorem impsum dolor emet</p>`}
              </div>
              <div className="sgcreator-css-box">
                <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                <CodeMirror
                  ref={ed => (this.editorRefs[i] = ed)}
                  options={{ mode: "css", theme: "neo" }}
                  value={typography[item]}
                  onBeforeChange={(editor, data, value) => {
                    this.onEditorChange(item, value);
                  }}
                />
                <p className="sgcreator-selector sgcreator-selector_close">
                  {`}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    this.props.changeTypographyStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.typography,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeTypographyStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Typography);
