import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTypographyStyles } from "../state/typography/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Typography extends Component {
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

    return (
      <section className="sgcreator-representation_section">
        <h1>Typography</h1>
        <div className="sgcreator-item-box">
          {stylesList.map((item, idx) => (
            <div key={item}>
              <div className="sgcreator-sample-box">
                <p className={`${prefix}-${item}`}>Lorem impsum dolor emet</p>
              </div>
              <div className="sgcreator-tag-box">
                {`<p class="${prefix}-${item}">Lorem impsum dolor emet</p>`}
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
