import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Editor from "../components/Editor";
import { changeButtonStyles } from "../state/buttons/action-creators";
import "../style/sgcreator-item-box/sgcreator-buttons.css";
import "codemirror/mode/css/css";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].focus();
  }

  render() {
    const prefix = this.props.appId.prefix;
    const selector = this.props.category.style;
    const stylesList = Object.keys(selector);
    const commonProps = 1;

    return (
      <section className="sgcreator-representation_section">
        <h1>Buttons</h1>
        <div className="sgcreator-item-box">
          <p className="sgcreator-tag-box">Common propperties to all Buttons</p>
          {stylesList.map(
            (item, idx, arr) =>
              idx <= commonProps ? (
                <Editor
                  key={item}
                  item={item}
                  idx={idx}
                  prefix={prefix}
                  selector={selector}
                  onEditorChange={(item, value) =>
                    this.onEditorChange(item, value)
                  }
                  editorMounted={editor => this.editorRefs.push(editor)}
                />
              ) : (
                <div
                  className="sgcreator-item-box sgcreator-item-box_buttons"
                  key={idx}
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
