import { useCallback, useEffect, useState } from "react";
import { Divider, Input, List, message, Pagination, Skeleton } from "antd";
import { MessageType } from "antd/lib/message";
import { Item } from "../data/interfaces";
import { nginxTransChar, showPromiseConfirm, shuffleArray } from "../utils";

interface IFileListProps {
  url: string;
  changeDirectory: (name: string) => void;
}

export const FileList = ({
  url,
  changeDirectory,
}: IFileListProps) => {
  if (url === "") /// TODO: remove this hack
    return <Skeleton active />;

  const [files, setFiles] = useState<Item[]>([]);
  const [dispFiles, setDispFiles] = useState<Item[]>([]);

  const loadFiles = useCallback(async (hide: MessageType) => {
    let res: Item[] = [];
    const resp = await fetch(`${window.location.origin}/${url}`);
    if (resp.status === 200 || resp.status === 304)
      res = await resp.json();
    shuffleArray(res);
    setFiles(res);
    setDispFiles(res);
    hide();
  }, [window.location.origin, url, setFiles]);

  useEffect(() => {
    setFiles([]);
    setDispFiles([]);
    const hide = message.loading("正在加载中", 0);
    loadFiles(hide);
  }, [loadFiles]);

  const [page, setPage] = useState(1);
  const onPaginationChange = useCallback((e: number) => setPage(e), [setPage]);

  const _search = (value: string) => {
    value = value.toLowerCase();
    console.log(value);
    let arrayFile: Item[] = files;
    let newArrayFile: Array<[Item, number]> = arrayFile.map((v) => [v, 0]);
    for (let x = 0; x < arrayFile.length; x++) {
      for (let y = 0; y < value.length; y++) {
        try {
          let name = decodeURIComponent(arrayFile[x].name).toLowerCase();
          if (
            name.substring(0, name.length - 3).includes(value[y]) &&
            value[y] !== " "
          ) {
            newArrayFile[x][1] += 1;
          }
        } catch { }
      }
    }
    for (let x = 0; x < arrayFile.length; x++) {
      for (let y = 0; y < value.length - 2; y++) {
        try {
          let name = decodeURIComponent(arrayFile[x].name).toLowerCase();
          if (
            name
              .substring(0, name.length - 3)
              .includes(value.substring(y, y + 2))
          ) {
            newArrayFile[x][1] += 5;
          }
        } catch { }
      }
    }
    newArrayFile.sort((a, b) => b[1] - a[1]);
    setFiles(newArrayFile.map((v) => v[0]));
  };

  const onSearch = useCallback((val: string) => {
    _search(val);
    setDispFiles(files);
    setPage(1);
  }, [files, setDispFiles, setPage]);

  if (files.length === 0)
    return <Skeleton active />;

  return (
    <div>
      <Input.Search
        placeholder="Input search text"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <List
        itemLayout="horizontal"
        dataSource={dispFiles.slice((page - 1) * 8, page * 8)}
        renderItem={(item) => (
          <List.Item
            style={{ paddingLeft: "20px" }}
            onClick={() => {
              if (item["@type"] === "file") {
                showPromiseConfirm(
                  item.name,
                  `/${url}/${nginxTransChar(item.name)}`
                );
              } else {
                changeDirectory(item.name);
              }
            }}
          >
            <List.Item.Meta
              title={item.name}
              description={`Size: ${item.size}, Type: ${item["@type"]}`}
            />
          </List.Item>
        )}
      />
      <Pagination
        size="small"
        total={dispFiles.length}
        showSizeChanger={false}
        showQuickJumper
        onChange={onPaginationChange}
      />
      <Divider dashed />
    </div>
  );
};
