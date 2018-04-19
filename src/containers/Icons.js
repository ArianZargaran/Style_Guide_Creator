import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeIconsStyles } from "../state/icons/action-creators";
import "codemirror/mode/css/css";

class Icons extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const icons = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(icons);

    return (
      <section className="sgcreator-representation_section">
        <h1>Icons</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box sgcreator-item-box_icons">
            <div className="sgcreator-sample-box">
              <i className={`${prefix}-icon fas fa-minus`} />
            </div>
            <div className="sgcreator-tag-box">
              {`<i class="${prefix}-icon fas fa-minus"></i>`}
            </div>
            {stylesList.map((item, i) => (
              <div className="sgcreator-css-box" key={item}>
                <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                <CodeMirror
                  ref={ed => (this.editorRefs[i] = ed)}
                  options={{ mode: "css", theme: "neo" }}
                  value={icons[item]}
                  onBeforeChange={(editor, data, value) => {
                    this.onEditorChange(item, value);
                  }}
                />
                <p className="sgcreator-selector sgcreator-selector_close">{`}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    this.props.changeIconsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.icons,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeIconsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Icons);
