import { useState, useReducer } from 'react';

import reducer from '../reducers';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';

import TableContent from './Table';
import Header from './Header';
import Title from './Title';
import Body from './Body';
import ButtonArea from './ButtonArea';
import Footer from './Footer';

const { Content } = Layout;

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
    console.log(body);
  };

  const addEvent = () => {
    console.log({ title, body });
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  console.log({ state });

  return (
    <>
      <Layout style={{ textAlign: 'center' }}>
        <Content style={{ margin: '60px 16px' }}>
          <Header />
          <Title title={title} onChangeTitle={onChangeTitle} />
          <Body body={body} onChangeBody={onChangeBody} />
          <ButtonArea addEvent={addEvent} />
          <TableContent state={state} dispatch={dispatch} />
          <Footer />
        </Content>
      </Layout>
    </>
  );
};

export default App;
