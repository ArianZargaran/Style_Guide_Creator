import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeLogoStyles } from "../state/logo/action-creators";
import "codemirror/mode/css/css";

class Logo extends Component {
  render() {
    const logo = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const name = this.props.appId.name;

    return (
      <section className="sgcreator-representation_section">
        <h1>Logo</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(logo).map((item, i, arr) => {
            return i === 0 ? (
              <div
                className="sgcreator-item-box sgcreator-item-box_logo"
                key={i}
              >
                <div className="sgcreator-tag-box">
                  {`Common properties to all Logos`}
                </div>
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "neo" }}
                    value={logo[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    }
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="sgcreator-item-box sgcreator-item-box_logo"
                key={i}
              >
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
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "neo" }}
                    value={logo[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    }
                  </p>
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
