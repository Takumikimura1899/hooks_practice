import { Layout, Typography } from 'antd';
import { Row, Col } from 'antd';

const Header = () => {
  const { Title } = Typography;
  const { Header } = Layout;

  return (
    <Row justify='center'>
      <Header
        style={{
          marginBottom: '20px',
          paddingTop: '10px',
          backgroundColor: 'azure',
        }}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Title level={1}>イベント作成フォーム</Title>
        </Col>
      </Header>
    </Row>
  );
};

export default Header;
