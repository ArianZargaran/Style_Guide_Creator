import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeListsStyles } from "../state/lists/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Lists extends Component {
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
        <h1>Lists</h1>
        <div className="sgcreator-item-box">
          <p className="sgcreator-tag-box">Common properties to all Lists</p>
          {stylesList.map(
            (item, idx, arr) =>
              idx <= commonProps ? (
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
                <div className="sgcreator-item-box_lists" key={item}>
                  <div className="sgcreator-sample-box">
                    <ul className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Dicta optio cumque dolore hic ea facilis</li>
                      <li>Minus, possimus, veniam, incidunt eligendi</li>
                    </ul>
                  </div>
                  <div className="sgcreator-tag-box">
                    {idx === 1
                      ? `<ul class="${prefix}-${arr[0]} ${prefix}-${item}">`
                      : `<ol class="${prefix}-${arr[0]} ${prefix}-${item}">`}
                    {<br />}
                    {`    <li>Lorem ipsum dolor sit amet.</li>`}
                    {<br />}
                    {`    <li>Dicta optio cumque dolore hic ea facilis</li>`}
                    {<br />}
                    {`    <li>Minus, possimus, veniam, incidunt eligendi</li>`}
                    {<br />}
                    {idx === 1 ? `</ul>` : `</ol>`}
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
    this.props.changeListsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.lists,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeListsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
