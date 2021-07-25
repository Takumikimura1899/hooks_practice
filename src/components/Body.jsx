import { Typography, Input, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import '../App.css';

const Body = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  return (
    <>
      <Title level={2}>ボディ</Title>
      <Row style={{ margin: '30px 16px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <TextArea rows={4} placeholder='body' />
        </Col>
      </Row>
    </>
  );
};

export default Body;
