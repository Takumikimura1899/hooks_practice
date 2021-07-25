import { Table, Button } from 'antd';

const TableContent = ({ state, dispatch }) => {
  const TableState = state.map((event) => {
    const id = event.id;
    const handleClickDeleteButton = () => {
      dispatch({ type: 'DELETE_EVENT', id });
      console.log('aaaa');
    };

    return {
      key: id,
      id: id,
      title: event.title,
      body: event.body,
      button: (
        <Button type='primary' danger onClick={handleClickDeleteButton}>
          削除
        </Button>
      ),
    };
  });
  console.log(TableState);

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
    {
      title: 'Button',
      dataIndex: 'button',
      key: 'button',
    },
  ];
  return <Table dataSource={TableState} columns={columns} />;
};
export default TableContent;

<Button type='primary' danger>
  全てのイベントを削除する
</Button>;
