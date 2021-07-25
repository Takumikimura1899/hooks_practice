import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';

import TableContent from './Table';
import Header from './Header';
import Title from './Title';
import Body from './Body';
import ButtonArea from './Button';
import Footer from './Footer';

const { Content } = Layout;

const App = () => {
  return (
    <>
      <Layout style={{ textAlign: 'center' }}>
        <Content style={{ margin: '60px 16px' }}>
          <Header />
          <Title />
          <Body />
          <ButtonArea />
          <TableContent />
          <Footer />
        </Content>
      </Layout>
    </>
  );
};

export default App;
