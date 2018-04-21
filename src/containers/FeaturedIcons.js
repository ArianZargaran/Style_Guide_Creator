import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeFiconsStyles } from "../state/featured_icons/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class FeaturedIcons extends Component {
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
        <h1>Featured Icons</h1>
        <div className="sgcreator-item-box">
          <div className="sgcreator-sample-box">
            <a href="#">
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x" />
                <i
                  className={`${prefix}-featured-icon fas fa-terminal fa-stack-1x fa-inverse`}
                />
              </span>
            </a>
          </div>
          <div className="sgcreator-tag-box">
            {`<span class="fa-stack fa-2x">`}
            {<br />}
            {`    <i class="fas fa-circle fa-stack-2x"></i>`}
            {<br />}
            {`    <i class="${prefix}-featured-icon"></i>`}
            {<br />}
            {`</span>`}
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
    this.props.changeFiconsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.featured_icons,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFiconsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedIcons);
