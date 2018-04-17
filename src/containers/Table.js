import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeTableStyles } from "../state/table/action-creators";
import "codemirror/mode/css/css";

class Table extends Component {
  render() {
    const table = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Table</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(table).map(
            (item, i) =>
              i === 0 ? (
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-sample-box">
                    <table className={`${prefix}-${item}`}>
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
                    {`<table class="${prefix}-${item}">`}
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
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      options={{ mode: "css", theme: "neo" }}
                      value={table[item]}
                      editorDidMount={editor => editor.focus()}
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
                <div className="sgcreator-css-box">
                  <p className="sgcreator-selector sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                  <CodeMirror
                    options={{ mode: "css", theme: "neo" }}
                    value={table[item]}
                    onChange={(editor, data, value) =>
                      this.onEditorChange(item, value)
                    }
                  />
                  <p className="sgcreator-selector sgcreator-selector_close">
                    }
                  </p>
                </div>
              )
          )}
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
