import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeHeadersStyles } from "../state/headers/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Headers extends Component {
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
        <h1>Headers</h1>
        <div className="sgcreator-item-box">
          <p className="sgcreator-tag-box">Common properties to all Headers</p>
          {stylesList.map(
            (item, idx, arr) =>
              idx === commonProps ? (
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
                <div key={item}>
                  <div className="sgcreator-sample-box">
                    <p className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<h${idx} class="${prefix}-${
                      arr[0]
                    } ${prefix}-${item}">Lorem Ipsum</h${idx}>`}
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
    this.props.changeHeadersStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.headers,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHeadersStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
