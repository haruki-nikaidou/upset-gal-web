import React from 'react';
import 'antd/dist/antd.css';
import { List, BackTop, Modal, Input, Pagination, Divider } from 'antd';
import { ExclamationCircleOutlined, AudioOutlined } from '@ant-design/icons';
import { getArrayFile } from './menu'
import { ExceptionMap } from 'antd/lib/result';
const { confirm } = Modal;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

function showPromiseConfirm(url, name) {
  confirm({
    title: '下载确认',
    icon: <ExclamationCircleOutlined />,
    content: '你确定要下载' + name + '吗？',
    onOk() {
      window.open(url, "_parent")
    },
    onCancel() { },
  });
}


class FileLi extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      files: getArrayFile(),
      page: 1
    }
  }


  onSearch = value => {
    let arrayFile = getArrayFile()
    let newArrayFile = arrayFile.map(v => [v, 0])
    for (let x = 0; x < arrayFile.length; x++) {
      for (let y = 0; y < value.length; y++) {
        try {
          if (decodeURIComponent(arrayFile[x].name).substring(0, decodeURIComponent(arrayFile[x].name).length - 4).indexOf(value[y]) !== -1 && value[y] !== ' ') {
            newArrayFile[x][1] += 1
          }
        } catch {

        }
      }
    }
    newArrayFile.sort((a, b) => {
      return b[1] - a[1]
    })
    this.setState({
      files: newArrayFile.map(v => v[0])
    })
  };

  onPaginationChange = (e) => {
    this.setState({
      page: e
    })
  }

  render() {
    return (
      <div id="hover-gal">
        <BackTop />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={this.onSearch}
        />
        <List
          itemLayout="horizontal"
          dataSource={this.state.files}
          renderItem={item => {
            console.log(item)
            return (
              <List.Item style={{ paddingLeft: "20px" }}>
                <List.Item.Meta title={
                  decodeURIComponent(item.name)
                } description={"size: " + item.size}
                  onClick={() => { showPromiseConfirm("/" + this.props.url + "/" + item.name, decodeURIComponent(item.name)) }}
                />
              </List.Item>
            )
          }}
        />
        <Divider dashed />
      </div>
    );
  }
}

export { FileLi }