import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Table.css";

class Table extends Component {
  render() {
    const table = this.props.category.Table;
    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(table.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_table"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <table className={table.className[item]}>
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
                {`<${table.tag} class="${table.className[item]}">`}
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
                {`</${table.tag}>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.table };
}

export default connect(mapStateToProps)(Table);
