import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeLinksStyles } from "../state/links/action-creators";
import "codemirror/mode/css/css";

class Links extends Component {
  render() {
    const links = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Links</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(links).map((item, i, arr) => {
            return i <= 1 || i === 4 ? (
              <div className="sgcreator-item-box" key={i}>
                {i === 0 ? (
                  <div className="sgcreator-tag-box">
                    "Common properties for all Links"
                  </div>
                ) : (
                  ""
                )}
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "neo" }}
                    value={links[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector_close">}</p>
                </div>
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
                  <p className="sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "neo" }}
                    value={links[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector_close">}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
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
