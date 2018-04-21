import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeHighlightsStyles } from "../state/highlights/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";
import "../style/sgcreator-item-box/sgcreator-highlights.css";

class Highlights extends Component {
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
    const commonProps = 0;

    return (
      <section className="sgcreator-representation_section">
        <h1>Highlights</h1>
        <div className="sgcreator-item-box">
          <p className="sgcreator-tag-box">
            Common properties for all Highlights
          </p>
          {stylesList.map((item, idx, arr) => {
            return idx <= commonProps ? (
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
                className="sgcreator-item-box sgcreator-item-box_highlights"
                key={item}
              >
                <div className="sgcreator-sample-box">
                  <div className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                    <h1 className="ya-header">Highlight</h1>
                  </div>
                </div>
                <div className="sgcreator-tag-box">
                  {`<div class="${prefix}-${arr[0]} ${prefix}-${item}">`}
                  {<br />}
                  {`    <h1 class="ya-header">Highlight</h1>`}
                  {<br />}
                  {`</div>`}
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
            );
          })}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    this.props.changeHighlightsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.highlights,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHighlightsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Highlights);
