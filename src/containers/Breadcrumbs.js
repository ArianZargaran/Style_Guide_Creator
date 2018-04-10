import React, { Component } from "react";
import Style from "react-style-tag";
import { connect } from "react-redux";

class Breadcrumbs extends Component {
  render() {
    const breadcrumbs = this.props.category.style;
    const prefix = this.props.appId.prefix;
    return (
      <section className="sgcreator-representation_section">
        <h1>Breadcrumbs</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(breadcrumbs).map((item, i) => (
            <div className="sgcreator-item-box" key={i}>
              <div className="sgcreator-sample-box">
                <nav>
                  <p>
                    <a href="#" className={`${prefix}${item}`}>
                      Link 1
                    </a>
                    <span>{" / "}</span>
                    <a href="#" className={`${prefix}${item}`}>
                      Link 2
                    </a>
                    <span>{" / "}</span>
                    <a href="#" className={`${prefix}${item}`}>
                      Link 3
                    </a>
                  </p>
                </nav>
              </div>
              <div className="sgcreator-tag-box">
                {`<nav>`}
                {<br />}
                {`    <p>`}
                {<br />}
                {`        <a className="${prefix}${item}">`}
                {<br />}
                {`            Link 1`}
                {<br />}
                {`        </a> / `}
                {<br />}
                {`        <a className="${prefix}${item}">`}
                {<br />}
                {`            Link 2`}
                {<br />}
                {`        </a / `}
                {<br />}
                {`        <a className="${prefix}${item}">`}
                {<br />}
                {`            Link 3`}
                {<br />}
                {`        </a>`}
                {<br />}
                {`    </p>`}
                {<br />}
                {`</nav>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${breadcrumbs[item]}`}</textarea>
              </div>
              <Style>{`.${prefix}${breadcrumbs[item]}`}</Style>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.breadcrumbs,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Breadcrumbs);
