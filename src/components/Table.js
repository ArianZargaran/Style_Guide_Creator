import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.table.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.table.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_table"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <table className={this.props.list.table.className[item]}>
                  <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                </table>
              </div>
              <div className="sgcreator-tag-box sgcreator-align-left">
                {`<${this.props.list.table.tag} class="${
                  this.props.list.table.className[item]
                }">`}
                {<br />}
                {`    <tr>`}
                {<br />}
                {`        <th>1</th>`}
                {<br />}
                {`        <th>2</th>`}
                {<br />}
                {`        <th>3</th>`}
                {<br />}
                {`    </tr>`}
                {<br />}
                {`    <tr>`}
                {<br />}
                {`        <td>4</td>`}
                {<br />}
                {`        <td>5</td>`}
                {<br />}
                {`        <td>6</td>`}
                {<br />}
                {`    </tr>`}
                {<br />}
                {`    <tr>`}
                {<br />}
                {`        <td>7</td>`}
                {<br />}
                {`        <td>8</td>`}
                {<br />}
                {`        <td>9</td>`}
                {<br />}
                {`    </tr>`}
                {<br />}
                {`</${this.props.list.table.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.table };
}

export default connect(mapStateToProps)(Table);
