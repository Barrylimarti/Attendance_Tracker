import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: 'center' ,backgroundColor:"#371F76 " }}>
    <span style={{ color: 'white' }}>&copy; Smart Attendance {new Date().getFullYear()}</span>
  </Footer>
);
