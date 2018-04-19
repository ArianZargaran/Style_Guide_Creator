import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeLinksStyles } from "../state/links/action-creators";
import "codemirror/mode/css/css";

class Links extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const links = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const commonProps = 0;
    const stylesList = Object.keys(links);

    return (
      <section className="sgcreator-representation_section">
        <h1>Links</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box">
            <p className="sgcreator-tag-box">Common properties for all Links</p>
            {stylesList.map((item, i, arr) => {
              return i <= commonProps || i === 4 ? (
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    ref={ed => (this.editorRefs[i] = ed)}
                    options={{ mode: "css", theme: "neo" }}
                    value={links[item]}
                    onBeforeChange={(editor, data, value) => {
                      this.onEditorChange(item, value);
                    }}
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    {`}`}
                  </p>
                </div>
              ) : (
                <div className="sgcreator-item-box" key={i}>
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
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      ref={ed => (this.editorRefs[i] = ed)}
                      options={{ mode: "css", theme: "neo" }}
                      value={links[item]}
                      onBeforeChange={(editor, data, value) => {
                        this.onEditorChange(item, value);
                      }}
                    />
                    <p className="sgcreator-selector sgcreator-selector_close">
                      {`}`}
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
