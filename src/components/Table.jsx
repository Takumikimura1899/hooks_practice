import { Table } from 'antd';

const TableContent = () => {
  const dataSource = [
    {
      key: '1',
      id: '1',
      title: 'aaaaaaaa',
      body: 'fffffff',
    },
    {
      key: '2',
      id: '2',
      title: 'aaaaaaaa',
      body: 'fffffff',
    },
    {
      key: '3',
      id: '3',
      title: 'aaaaaaaa',
      body: 'fffffff',
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};
export default TableContent;
