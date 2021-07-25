import { Typography, Input, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../App.css';

const Title = () => {
  const { Title } = Typography;

  return (
    <>
      <Title level={2}>タイトル</Title>
      <Row style={{ margin: '30px 16px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Input
            size='large'
            placeholder='Basic usage'
            prefix={<UserOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

export default Title;
