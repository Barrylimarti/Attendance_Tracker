import { Button, Col, Divider, Layout, Row, Typography } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import { Footer } from '../../../components/common/sharedLayout';
import "./mainmenu.css"

const { Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
    <Layout className='home layout'>
      <HeaderNavbar />
      <Content>
        <Row align="middle">
          <Col style={{ top: '50px' }} span={24} align="middle">
            <Title level={6}>
              <Texty style={{color:"#804dee"}}>
                Welcome to Smart attendance
              </Texty>
            </Title>
            <Texty type="left" mode="smooth" interval="20" style={{color:"#371F76"}}>
              An attendance tracking app with facial recognition
            </Texty>
            <br></br>
            <Button htmlType='submit' style={{background:"#371F76",color:"white"}}>
              <Link to='/signup'>Get Started</Link>
            </Button>
            
            {/*<div>
              First time user? Please visit <Link to='/userguidelines'> User Guidelines</Link>
            </div>*/}
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};
