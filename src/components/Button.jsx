import { Row, Col, Button } from 'antd';

import 'antd/dist/antd.css';
import '../App.css';

const ButtonArea = () => {
  return (
    <>
      <Row style={{ margin: '30px 16px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Button type='primary'>イベントを作成する</Button>
          <Button type='primary' danger>
            全てのイベントを削除する
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ButtonArea;
