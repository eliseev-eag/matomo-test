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
  state = {
    collapsed: true
  };

  componentDidMount() {
    this.props.actions.loadEvents();
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { Content, Sider } = Layout;
    const routes = [viewDataPage, editorDataPage];
    const selectedMenuKeys = [
      routes.find(route => route === this.props.location.pathname)
    ];

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" mode="inline" selectedKeys={selectedMenuKeys}>
            <Menu.Item key={viewDataPage}>
              <Link to={viewDataPage}>
                <Icon type="pie-chart" />
                <span>Data View</span>
              </Link>
            </Menu.Item>
            <Menu.Item key={editorDataPage}>
              <Link to={editorDataPage}>
                <Icon type="edit" />
                <span>Data Editor</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route path={viewDataPage} component={DataViewPage} />
              <Route path={editorDataPage} component={DataEditorPage} />
              <Redirect to={viewDataPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(
  connect(null, dispatch => ({
    actions: bindActionCreators({ loadEvents }, dispatch)
  }))(App)
);
