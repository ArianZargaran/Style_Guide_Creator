import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { changeFormStyles } from "../state/form/action-creators";
import "codemirror/mode/css/css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
    this.state = this.props.category.style;
  }

  componentDidMount() {
    this.editorRefs[0].editor.focus();
  }

  render() {
    const form = this.props.category.style;
    const prefix = this.props.appId.prefix;
    const stylesList = Object.keys(form);

    return (
      <section className="sgcreator-representation_section">
        <h1>Form</h1>
        <div className="sgcreator-item-box sgcreator-item-box_editorial-form">
          <div className="sgcreator-sample-box">
            <div className={`${prefix}-form`}>
              <div>
                <label HTMLfor="name">Full Name</label>
                <input type="text" id="name" />
              </div>
              <div>
                <label HTMLfor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div>
                <span>
                  <input type="checkbox" id="terms" />
                  <label HTMLfor="terms">Accept Terms & Conditions</label>
                </span>
              </div>
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className="sgcreator-tag-box">
            {`<form class="${prefix}-form">`}
            {<br />}
            {`    <div>`}
            {<br />}
            {`        <label for="full name">Full Name</label>`}
            {<br />}
            {`        <input type="text" id="full name" />`}
            {<br />}
            {`    </div>`}
            {<br />}
            {`    <div>`}
            {<br />}
            {`        <label for="password">Password</label>`}
            {<br />}
            {`        <input type="password" id="password" />`}
            {<br />}
            {`    </div>`}
            {<br />}
            {`    <div>`}
            {<br />}
            {`        <input type="checkbox" id="terms" required />`}
            {<br />}
            {`        <label for="terms">Accept Terms & Conditions</label>`}
            {<br />}
            {`    </div>`}
            {<br />}
            {`    <input type="submit" value="Submit">`}
            {<br />}
            {`</form>`}
          </div>
          {stylesList.map((item, i) => (
            <div key={item} className="sgcreator-css-box">
              <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
              <CodeMirror
                ref={ed => (this.editorRefs[i] = ed)}
                options={{ mode: "css", theme: "neo" }}
                value={this.state[item]}
                onBeforeChange={(editor, data, value) => {
                  this.onEditorChange(item, value);
                }}
              />
              <p className="sgcreator-selector sgcreator-selector_close">}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  onEditorChange = (item, value) => {
    this.setState({ [item]: value });

    this.props.changeFormStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.formComponent,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFormStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
