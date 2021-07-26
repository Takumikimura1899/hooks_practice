import { Table, Button } from 'antd';

import { DELETE_EVENT } from '../actions';

const TableContent = ({ state, dispatch }) => {
  const TableState = state.map((event) => {
    const id = event.id;
    const handleClickDeleteButton = () => {
      const result = window.confirm(
        `このイベント(id=${id})を本当に削除しても良いですか`
      );
      if (result) dispatch({ type: DELETE_EVENT, id });
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
