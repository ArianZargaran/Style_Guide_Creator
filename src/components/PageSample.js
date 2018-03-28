import React, { Component } from "react";
import { connect } from "react-redux";

class PageHeader extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.pageSample.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.pageSample.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_page-header"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <nav>
                  <p>
                    <a className="ya-breadcrumbs">Link 1 /</a>
                    <a className="ya-breadcrumbs"> Link 2 /</a>
                    <a className="ya-breadcrumbs"> Link 3</a>
                  </p>
                </nav>
                <h1 class="ya-header ya-header_one">This is a Header</h1>
                <div className="ya-logo ya-logo_full" />
                <p class="ya-base-text">
                  Lorem impsum dolor emet Lorem impsum dolor emet Lorem impsum
                  dolor emet impsum dolor emet
                </p>
                <ul class="ya-list ya-ul-list ya-ul-list_linked">
                  <li>
                    <a href="/">Lorem ipsum dolor sit amet.</a>
                  </li>
                  <li>
                    <a href="/">Dicta optio cumque dolore hic ea facilis</a>
                  </li>
                  <li>
                    <a href="/">Minus, possimus, veniam, incidunt eligendi</a>
                  </li>
                </ul>
                <a href="/" class="ya-button ya-button_primary">
                  Learn more
                </a>
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

export default connect(mapStateToProps)(PageHeader);
