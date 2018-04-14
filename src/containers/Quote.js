import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeQuoteStyles } from "../state/quote/action-creators";
import "codemirror/mode/css/css";

class Quote extends Component {
  render() {
    const quote = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Quote</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(quote).map(
            (item, i) =>
              i === 0 ? (
                <div
                  className="sgcreator-item-box sgcreator-item-box_quote"
                  key={i}
                >
                  <div className="sgcreator-sample-box">
                    <div className={`${prefix}-${item}`}>
                      <p>Lorem impsum dolor emet</p>
                    </div>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<p class="${prefix}-${item}">Lorem impsum dolor emet</p>`}
                  </div>
                  <div className="sgcreator-css-box">
                    <CodeMirror
                      options={{ mode: "css", theme: "ttcn" }}
                      value={quote[item]}
                      onChange={(editor, data, value) =>
                        this.onEditorChange(item, value)
                      }
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="sgcreator-item-box sgcreator-item-box_quote"
                  key={i}
                >
                  <div className="sgcreator-tag-box">
                    {`<p class="${prefix}-${item}">Lorem impsum dolor emet</p>`}
                  </div>
                  <div className="sgcreator-css-box">
                    <CodeMirror
                      options={{ mode: "css", theme: "ttcn" }}
                      value={quote[item]}
                      onChange={(editor, data, value) =>
                        this.onEditorChange(item, value)
                      }
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
    this.props.changeQuoteStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.quote,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeQuoteStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
