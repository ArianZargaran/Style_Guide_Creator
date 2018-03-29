import React, { Component } from "react";
import { connect } from "react-redux";

/* CORRECT PAGE_SAMPLE SAMPLE_PAGE*/

import "../styles/sgcreator/sgcreator-item-box/sgcreator-sample-page.css";

class PageHeader extends Component {
  render() {
    return (
      <section className="sgcreator-representation_section">
        <h1>{this.props.list.sample_page.section}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(this.props.list.sample_page.className).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_sample-page sgcreator-align-left"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <nav>
                  <p>
                    <a href="#" className="ya-breadcrumbs">
                      Link 1 /
                    </a>
                    <a href="#" className="ya-breadcrumbs">
                      {" "}
                      Link 2 /
                    </a>
                    <a href="#" className="ya-breadcrumbs">
                      {" "}
                      Link 3
                    </a>
                  </p>
                </nav>
                <h1 class="ya-header ya-header_one">This is a Header</h1>
                <div className="ya-logo ya-logo_full" />
                <button href="" class="ya-button ya-button_primary">
                  Learn more
                </button>
                <p class="ya-base-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <ul class="ya-list ya-ul-list ya-ul-list_linked">
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet.</a>
                  </li>
                  <li>
                    <a href="#">Dicta optio cumque dolore hic ea facilis</a>
                  </li>
                  <li>
                    <a href="#">Minus, possimus, veniam, incidunt eligendi</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.sample_page };
}

export default connect(mapStateToProps)(PageHeader);
