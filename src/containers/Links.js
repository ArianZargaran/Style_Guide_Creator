import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLinksStyles } from "../state/links/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Links extends Component {
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
        <h1>Links</h1>
        <div className="sgcreator-item-box">
          <p className="sgcreator-tag-box">Common properties to all Links</p>
          {stylesList.map((item, idx, arr) => {
            return idx <= commonProps || idx === 4 ? (
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
              <div key={item} className="sgcreator-item-box">
                <div className="sgcreator-sample-box">
                  <a
                    href="#"
                    className={`${prefix}-${arr[0]} ${prefix}-${item}`}
                  >
                    Lorem impsum dolor emet
                  </a>
                </div>
                <div className="sgcreator-tag-box">
                  {`<a href="" class="${prefix}-${
                    arr[0]
                  } ${prefix}-${item}">Lorem impsum dolor emet</a>`}
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
    this.props.changeLinksStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.links,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLinksStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);
