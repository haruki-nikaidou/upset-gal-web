import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { GalPageHead } from './pageHeader'
import { Readme } from './readme'
import { SiderMenu } from './menu'
import 'antd/dist/antd.css';
import { Layout, Breadcrumb, Typography, Space } from 'antd';
const { Content, Footer, Sider } = Layout;
const { Text, Link } = Typography;

class SiderDemo extends React.Component {
  constructor(...args) {
    super(...args)
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    console.log(flag)
    if (!flag) {
      this.state = {
        collapsed: true,
        category: "",
      }
    } else {
      this.state = {
        collapsed: false,
        category: "",
      }
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <SiderMenu />
        </Sider>
        <Layout className="site-layout">
          <GalPageHead />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.state.category}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div id="main"></div>
              <Readme />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Text type="secondary"> powered by shinnku </Text>
            <br />
            <Text>此版本为 <Text code>α 1.1.0</Text> 试用版 </Text>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));

reportWebVitals();
