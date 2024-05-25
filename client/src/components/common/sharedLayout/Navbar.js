import { Layout } from 'antd';
import React, { useContext } from 'react';
import { AuthContext, NavbarContext } from '../../../context';
import { LecturerSiderNavbar } from '../../lecturerComponent';
import { StudentSiderNavbar } from '../../studentComponent';
import './Navbar.css';

const { Sider } = Layout;

export default () => {
  const { user } = useContext(AuthContext);
  const { collapsed, toggleCollapsed } = useContext(NavbarContext);

  return (
    <>
      <Sider className='siderNavbar' collapsible collapsed={collapsed} 
        onCollapse={toggleCollapsed} style={{backgroundColor:'#371F76'}}>
        {user.userLevel == 0 ? <StudentSiderNavbar /> : <LecturerSiderNavbar />}
      </Sider>
    </>
  );
};
