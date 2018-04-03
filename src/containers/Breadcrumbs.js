import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Breadcrumbs.css";

class Breadcrumbs extends Component {
  render() {
    const breadcrumbs = this.props.category.Breadcrumbs;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(breadcrumbs.className).map((item, i) => (
            <div className="sgcreator-item-box" key={i}>
              <div className="sgcreator-sample-box">
                <nav>
                  <p>
                    <a href="#" className={breadcrumbs.className[item]}>
                      Link 1
                    </a>
                    <span>{" / "}</span>
                    <a href="#" className={breadcrumbs.className[item]}>
                      Link 2
                    </a>
                    <span>{" / "}</span>
                    <a href="#" className={breadcrumbs.className[item]}>
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
                {`        <${breadcrumbs.tag} className="${
                  breadcrumbs.className[item]
                }">`}
                {<br />}
                {`            Link 1`}
                {<br />}
                {`        </${breadcrumbs.tag}> / `}
                {<br />}
                {`        <${breadcrumbs.tag} className="${
                  breadcrumbs.className[item]
                }">`}
                {<br />}
                {`            Link 2`}
                {<br />}
                {`        </${breadcrumbs.tag}> / `}
                {<br />}
                {`        <${breadcrumbs.tag} className="${
                  breadcrumbs.className[item]
                }">`}
                {<br />}
                {`            Link 3`}
                {<br />}
                {`        </${breadcrumbs.tag}>`}
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
  return { category: state.breadcrumbs };
}

export default connect(mapStateToProps)(Breadcrumbs);
