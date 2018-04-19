import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeQuoteStyles } from "../state/quote/action-creators";
import "codemirror/mode/css/css";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const quote = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(quote);

    return (
      <section className="sgcreator-representation_section">
        <h1>Quote</h1>
        <div className="sgcreator-representation_wrapper">
          <div className="sgcreator-item-box">
            <div className="sgcreator-sample-box">
              <div className={`${prefix}-quote`}>
                <p>Lorem impsum dolor emet</p>
              </div>
            </div>
            <div className="sgcreator-tag-box">
              {`<div class="${prefix}-quote">`}
              {<br />}
              {`    <p>Lorem impsum dolor emet</p>`}
              {<br />}
              {`</div>`}
            </div>
          </div>
          {stylesList.map((item, i) => (
            <div key={item} className="sgcreator-css-box">
              <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
              <CodeMirror
                ref={ed => (this.editorRefs[i] = ed)}
                options={{
                  mode: "css",
                  theme: "neo"
                }}
                value={quote[item]}
                onBeforeChange={(editor, data, value) => {
                  this.onEditorChange(item, value);
                }}
              />
              <p className="sgcreator-selector sgcreator-selector_close">
                {`}`}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
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
