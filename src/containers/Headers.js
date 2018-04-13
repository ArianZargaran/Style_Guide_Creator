import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeHeadersStyles } from "../state/headers/action-creators";
import "codemirror/mode/css/css";

class Headers extends Component {
  render() {
    const headers = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Headers</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(headers).map((item, i, arr) => (
            <div className="sgcreator-item-box" key={item}>
              <div className="sgcreator-sample-box">
                <p className={`${prefix}-${arr[0]} ${prefix}-${item}`}>
                  Lorem Ipsum
                </p>
              </div>
              <div className="sgcreator-tag-box">
                {i === 0
                  ? `Common properties for all Headers`
                  : `<h${i} class="${prefix}-${
                      arr[0]
                    } ${prefix}-${item}">Lorem Ipsum</h${i}>`}
              </div>
              <div className="sgcreator-css-box">
                <CodeMirror
                  options={{ mode: "css", theme: "monokai" }}
                  value={headers[item]}
                  onChange={(editor, data, value) =>
                    this.onEditorChange(item, value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
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
