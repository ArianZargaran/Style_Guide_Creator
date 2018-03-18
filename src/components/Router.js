import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Categories from "./Categories";
import Home from "./Home";
import Typography from "./Typography";
import Buttons from "./Buttons";
import Links from "./Typography";
import Lists from "./Buttons";
import Icons from "./Typography";
import Breadcrumbs from "./Buttons";
import Table from "./Typography";
import Grids from "./Buttons";
import Highlights from "./Typography";
import Colors from "./Buttons";
import EditorialHeader from "./Typography";
import ArticleSection from "./Buttons";
import GuidesSection from "./Typography";
import PageHeader from "./Buttons";
import Quote from "./Typography";
import FeturedIcons from "./Buttons";
import FeturedSpotlight from "./Typography";
import FeaturedList from "./Buttons";
import FeaturedBlog from "./Typography";
import Navigation from "./Buttons";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="sgcreator-hook">
          <Categories />
          <Switch>
            <Route path="/navigation" component={Navigation} />
            <Route path="/featured-blog" component={FeaturedBlog} />
            <Route path="/featured-list" component={FeaturedList} />
            <Route path="/fetured-spotlight" component={FeturedSpotlight} />
            <Route path="/featured-icons" component={FeturedIcons} />
            <Route path="/quote" component={Quote} />
            <Route path="/page-header" component={PageHeader} />
            <Route path="/guides-section" component={GuidesSection} />
            <Route path="/article-section" component={ArticleSection} />
            <Route path="/editorial-header" component={EditorialHeader} />
            <Route path="/highlights" component={Highlights} />
            <Route path="/colors" component={Colors} />
            <Route path="/grids" component={Grids} />
            <Route path="/table" component={Table} />
            <Route path="/breadcrumbs" component={Breadcrumbs} />
            <Route path="/icons" component={Icons} />
            <Route path="/lists" component={Lists} />
            <Route path="/links" component={Links} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/typography" component={Typography} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
