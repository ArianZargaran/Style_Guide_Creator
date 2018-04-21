import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTableStyles } from "../state/table/action-creators";
import Editor from "../components/Editor";

import "codemirror/mode/css/css";

class Table extends Component {
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
        <h1>Table</h1>

        <div className="sgcreator-item-box">
          <div className="sgcreator-sample-box">
            <table className={`${prefix}-table`}>
              <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="sgcreator-tag-box">
            {`<table class="${prefix}-table">`}
            {<br />}
            {`    <thead>`}
            {<br />}
            {`        <tr>`}
            {<br />}
            {`            <th>1</th>`}
            {<br />}
            {`            <th>2</th>`}
            {<br />}
            {`            <th>3</th>`}
            {<br />}
            {`        </tr>`}
            {<br />}
            {`    </thead>`}
            {<br />}
            {`    <tbody>`}
            {<br />}
            {`        <tr>`}
            {<br />}
            {`            <td>4</td>`}
            {<br />}
            {`            <td>5</td>`}
            {<br />}
            {`            <td>6</td>`}
            {<br />}
            {`        </tr>`}
            {<br />}
            {`    </tbody>`}
            {<br />}
            {`    <tfoot>`}
            {<br />}
            {`        <tr>`}
            {<br />}
            {`            <td>7</td>`}
            {<br />}
            {`            <td>8</td>`}
            {<br />}
            {`            <td>9</td>`}
            {<br />}
            {`        </tr>`}
            {<br />}
            {`    </tfoot>`}
            {<br />}
            {`</table>`}
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
    this.props.changeTableStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.table,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeTableStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
