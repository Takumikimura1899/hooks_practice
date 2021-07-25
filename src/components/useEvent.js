import { Table, Button } from 'antd';

const useEvent = (state, dispatch) => {
  state.map((event) => {
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
};

export default useEvent;
