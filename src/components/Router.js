import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Categories from "./Categories";
import Home from "./Home";
import Typography from "./Typography";
import Buttons from "./Buttons";
import Links from "./Links";
import Lists from "./Lists";
import Icons from "./Icons";
import Logo from "./Logo";
import Breadcrumbs from "./Breadcrumbs";
import Table from "./Table";
import Colors from "./Colors";
import Headers from "./Headers";
import Quote from "./Quote";
import Highlights from "./Highlights";
import FeaturedIcons from "./FeaturedIcons";
import PageSample from "./PageSample";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="sgcreator-hook">
          <Categories />
          <Switch>
            <Route path="/quote" component={Quote} />
            <Route path="/featured-icons" component={FeaturedIcons} />
            <Route path="/headers" component={Headers} />
            <Route path="/highlights" component={Highlights} />
            <Route path="/colors" component={Colors} />
            <Route path="/table" component={Table} />
            <Route path="/breadcrumbs" component={Breadcrumbs} />
            <Route path="/icons" component={Icons} />
            <Route path="/logo" component={Logo} />
            <Route path="/lists" component={Lists} />
            <Route path="/links" component={Links} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/typography" component={Typography} />
            <Route path="/page-sample" component={PageSample} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
