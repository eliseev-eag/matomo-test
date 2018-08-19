import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { loadEvents } from './ducks';
import { DataViewPage } from './DataViewPage';
import { DataEditorPage } from './DataEditorPage';
class App extends Component {
  componentDidMount() {
    this.props.actions.loadEvents();
  }

  render() {
    const { Content } = Layout;
    const routes = [DataEditorPage.ROUTE, DataViewPage.ROUTE];
    const selectedMenuKeys = [routes.find(route => route === this.props.location.pathname.substring(1))];

    return (
      <Layout>
        <Menu mode="horizontal" selectedKeys={selectedMenuKeys}>
          <Menu.Item key={DataViewPage.ROUTE} >
            <Link to={`/${DataViewPage.ROUTE}`}>
              <Icon type="pie-chart" />
              Data View
              </Link>
          </Menu.Item>
          <Menu.Item key={DataEditorPage.ROUTE}>
            <Link to={`/${DataEditorPage.ROUTE}`}>
              <Icon type="edit" />
              Data Editor
              </Link>
          </Menu.Item>
        </Menu>
        <Content>
          <Switch>
            <Route path={`/${DataViewPage.ROUTE}`} component={DataViewPage} />
            <Route path={`/${DataEditorPage.ROUTE}`} component={DataEditorPage} />
            <Redirect to={`/${DataViewPage.ROUTE}`} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(
  connect(
    null,
    dispatch => ({ actions: bindActionCreators({ loadEvents }, dispatch) })
  )(App));
