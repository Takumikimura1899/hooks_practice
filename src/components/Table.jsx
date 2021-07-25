import { Table } from 'antd';

const TableContent = () => {
  const dataSource = [
    {
      id: 1,
      title: 'aaaaaaaa',
      body: 'fffffff',
    },
    {
      id: 2,
      title: 'aaaaaaaa',
      body: 'fffffff',
    },
    {
      id: 3,
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
