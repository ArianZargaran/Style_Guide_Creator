import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeIconsStyles } from "../state/icons/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Icons extends Component {
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
        <h1>Icons</h1>
        <div className="sgcreator-item-box">
          <div className="sgcreator-sample-box">
            <i className={`${prefix}-icon fas fa-minus`} />
          </div>
          <div className="sgcreator-tag-box">
            {`<i class="${prefix}-icon fas fa-minus"></i>`}
          </div>
          {stylesList.map((item, idx) => (
            <Editor
              key={item}
              item={item}
              idx={idx}
              prefix={prefix}
              selector={selector}
              onEditorChange={(item, value) => this.onEditorChange(item, value)}
              editorMounted={editor => this.editorRefs.push(editor)}
            />
          ))}
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
