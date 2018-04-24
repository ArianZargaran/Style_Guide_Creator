import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBreadcrumbsStyles } from "../state/breadcrumbs/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Breadcrumbs extends Component {
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
        <h1>Breadcrumbs</h1>
        <div className="sgcreator-item-box">
          <div className="sgcreator-sample-box">
            <ul className={`${prefix}-breadcrumbs`}>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>Actual</li>
            </ul>
          </div>
          <div className="sgcreator-tag-box">
            {`<ul class="${prefix}-breadcrumbs>`}
            {<br />}
            {`    <li><a>Link 1</a></li>`}
            {<br />}
            {`    <li><a>Link 2</a></li>`}
            {<br />}
            {`    <li><a>Actual</a></li>`}
            {<br />}
            {`</ul>`}
          </div>
          {stylesList.map((item, idx, arr) => (
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
    this.props.changeBreadcrumbsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.breadcrumbs,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeBreadcrumbsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
