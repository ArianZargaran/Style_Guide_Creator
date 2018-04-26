import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLogoStyles } from "../state/logo/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Logo extends Component {
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
    const name = this.props.appId.name;
    const commonProps = 0;

    return (
      <section className="sgcreator-representation_section">
        <h1>Logo</h1>
        <div className="sgcreator-item-box">
          <p className="sgcreator-tag-box">Common properties to all Logos</p>
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
              <div key={item} className="sgcreator-item-box_logo">
                <div className="sgcreator-sample-box">
                  <h1 className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                    {name}
                  </h1>
                </div>
                <div className="sgcreator-tag-box">
                  {`<h1 class=${prefix}-${arr[0]} ${prefix}-${item}">
                    ${name}
                  </h1>`}
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
    this.props.changeLogoStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.logo,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLogoStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
