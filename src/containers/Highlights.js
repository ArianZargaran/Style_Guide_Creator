import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeHighlightsStyles } from "../state/highlights/action-creators";
import "codemirror/mode/css/css";
import "../style/sgcreator-item-box/sgcreator-highlights.css";

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
    this.state = this.props.category.style;
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const highlights = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(highlights);
    const commonProps = 0;

    return (
      <section className="sgcreator-representation_section">
        <h1>Highlights</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box">
            <p className="sgcreator-tag-box">
              Common properties for all Highlights
            </p>
            {stylesList.map((item, i, arr) => {
              return i <= commonProps ? (
                <div className="sgcreator-css-box" key={item}>
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    ref={ed => (this.editorRefs[i] = ed)}
                    options={{ mode: "css", theme: "neo" }}
                    value={this.state[item]}
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
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      ref={ed => (this.editorRefs[i] = ed)}
                      options={{ mode: "css", theme: "neo" }}
                      value={highlights[item]}
                      onBeforeChange={(editor, data, value) => {
                        this.onEditorChange(item, value);
                      }}
                    />
                    <p className="sgcreator-selector sgcreator-selector_close">
                      {"}"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    this.setState({ [item]: value });

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
