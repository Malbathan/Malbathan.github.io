import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { IconContext } from 'react-icons/lib';
import {IoMdNotificationsOutline} from "react-icons/io"
import styled from "styled-components";
import LoggedIn from "../loggedIn/LogedIn";
import { data } from "../loggedIn/data";

import Avatar from 'react-avatar';


const Styles = styled.div`
  .navbar {
    background-color: #f8f9fa;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const Button  = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

const NavigationBar = () => {

  const openModal = () => {
    window.document.getElementById("notification").click()
  };
  
  const onClick = () => {
    window.document.getElementById("account-menu-button").click()
  }

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/"><img src="logo.png" alt="logotipo martins"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Item>  
                <div>
                  <Button onClick={onClick}>
                    { data.map(item=>(
                            <Avatar 
                              color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
                              name={item.firstName+" "+item.lastName} 
                              maxInitials={2} 
                              size="40"  
                              round={true}
                            />
                        ))
                      }
                  </Button>
                </div>
            </Nav.Item>
              <LoggedIn />
            </Nav.Item>
            <Nav.Item>
            <IconContext.Provider value={{ color: '#3D8BFD' }}>
              <Button onClick={openModal}>
                <IoMdNotificationsOutline/>
              </Button>
            </IconContext.Provider>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar