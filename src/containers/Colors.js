import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeColorsStyles } from "../state/colors/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].focus();
  }

  render() {
    const selector = this.props.category.style;
    const stylesList = Object.keys(selector);
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Colors</h1>
        <div>
          {stylesList.map((item, idx) => (
            <div key={item} className="sgcreator-item-box">
              <div className="sgcreator-sample-box">
                <p className={`${prefix}-${item}`}>{item}</p>
                <div className="sgcreator-tag-box">
                  {`<div class="${prefix}-${item}"></div>`}
                </div>
              </div>
              <Editor
                item={item}
                idx={idx}
                prefix={prefix}
                selector={selector}
                onEditorChange={(item, value) =>
                  this.onEditorChange(item, value)
                }
                editorMounted={editor => this.editorRefs.push(editor)}
              />
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
