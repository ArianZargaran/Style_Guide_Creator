import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeQuoteStyles } from "../state/quote/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Quote extends Component {
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
        <h1>Quote</h1>
        <div>
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
