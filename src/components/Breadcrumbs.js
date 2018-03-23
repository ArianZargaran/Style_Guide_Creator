import React, { Component } from "react";
import { connect } from "react-redux";

class Breadcrumbs extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.breadcrumbs.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.breadcrumbs.className).map((item, i) => (
            <div className="sgcreator-item-box" itemID={i} key={i}>
              <div className="sgcreator-sample-box">
                <nav>
                  <p>
                    <a
                      href=""
                      className={this.props.list.breadcrumbs.className[item]}
                    >
                      Link 1
                    </a>
                    {" / "}
                    <a
                      href=""
                      className={this.props.list.breadcrumbs.className[item]}
                    >
                      Link 2
                    </a>
                    {" / "}
                    <a
                      href=""
                      className={this.props.list.breadcrumbs.className[item]}
                    >
                      Link 3
                    </a>
                  </p>
                </nav>
              </div>
              <div className="sgcreator-tag-box sgcreator-align-left">
                {`<nav>`}
                {<br />}
                {`    <p>`}
                {<br />}
                {`        <${this.props.list.breadcrumbs.tag} className=${
                  this.props.list.breadcrumbs.className[item]
                }>`}
                {<br />}
                {`            Link 1`}
                {<br />}
                {`        </${this.props.list.breadcrumbs.tag}> / `}
                {<br />}
                {`        <${this.props.list.breadcrumbs.tag} className=${
                  this.props.list.breadcrumbs.className[item]
                }>`}
                {<br />}
                {`            Link 2`}
                {<br />}
                {`        </${this.props.list.breadcrumbs.tag}> / `}
                {<br />}
                {`        <${this.props.list.breadcrumbs.tag} className=${
                  this.props.list.breadcrumbs.className[item]
                }>`}
                {<br />}
                {`            Link 3`}
                {<br />}
                {`        </${this.props.list.breadcrumbs.tag}>`}
                {<br />}
                {`    </p>`}
                {<br />}
                {`</nav>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Breadcrumbs);
