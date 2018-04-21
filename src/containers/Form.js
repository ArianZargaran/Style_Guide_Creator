import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeFormStyles } from "../state/form/action-creators";
import Editor from "../components/Editor";
import "codemirror/mode/css/css";

class Form extends Component {
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
        <h1>Form</h1>
        <div className="sgcreator-item-box">
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

  onFormSubmit(e) {
    e.preventDefault();
  }

  onEditorChange = (item, value) => {
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
