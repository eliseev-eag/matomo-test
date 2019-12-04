import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { loadEvents } from "../ducks";
import { DataViewPage } from "./DataViewPage";
import { DataEditorPage } from "./DataEditorPage";
import { editorDataPage, viewDataPage } from "./routes";
class App extends Component {
  componentDidMount() {
    this.props.actions.loadEvents();
  }

  render() {
    const { Content } = Layout;
    const routes = [viewDataPage, editorDataPage];
    const selectedMenuKeys = [
      routes.find(route => route === this.props.location.pathname)
    ];

    return (
      <Layout>
        <Menu mode="horizontal" selectedKeys={selectedMenuKeys}>
          <Menu.Item key={viewDataPage}>
            <Link to={viewDataPage}>
              <Icon type="pie-chart" />
              Data View
            </Link>
          </Menu.Item>
          <Menu.Item to={editorDataPage}>
            <Link to={editorDataPage}>
              <Icon type="edit" />
              Data Editor
            </Link>
          </Menu.Item>
        </Menu>
        <Content>
          <Switch>
            <Route path={viewDataPage} component={DataViewPage} />
            <Route path={editorDataPage} component={DataEditorPage} />
            <Redirect to={viewDataPage} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(
  connect(null, dispatch => ({
    actions: bindActionCreators({ loadEvents }, dispatch)
  }))(App)
);
