import React from 'react';
import styled from "styled-components";

import { IconContext } from 'react-icons/lib';

import { SidebarData } from './data';
import SubMenu from './subMenu';


const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  z-index: 1;
  top: 3.4em; 
  background-color: #f8f9fa;
  overflow-x: hidden;
  padding-top: 10px;
`;

const SidebarNav = styled.nav`
  background: #f8f9fa;
  width: 250px;
  height: 90vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10vh;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideNav  = () => {



    return (
      <StyledSideNav>
        <IconContext.Provider value={{ color: '#3D8BFD' }}>
          <SidebarNav sidebar>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        </IconContext.Provider>
      </StyledSideNav>
    );
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <SideNav></SideNav>
    );
  }
}