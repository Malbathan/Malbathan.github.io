import React, { useRef } from "react";
import { useOutClicked } from "./outClicked"
import Avatar from 'react-avatar';
import styled from "styled-components";

import { data } from "./data";
import "../../App.css"


const MenuContainer = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

`
const MenuTrigger = styled.button`

  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */

`
const Fullname = styled.h5`
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #000000;
  margin: 10px 0 0 0;
`
const Email = styled.p`
  color: #BDBDBD;
`

const Link = styled.a`
  border-top: 1px solid #dddddd;
  color: #DD2C00!important;
`

const LoggedIn = () => {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useOutClicked( false);
  console.log(isActive)

  const onClick = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <MenuTrigger onClick={onClick} id="account-menu-button" style={{display: "none"}}>
        
      </MenuTrigger>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      > 
          <div className="d-flex">
            { data.map(item=>(
              <>
                <Avatar name={item.firstName+" "+item.lastName} maxInitials={2} round={true} size={50} style={{margin: "10px"}}/>
                <div>
                  <Fullname>{item.firstName + item.lastName}</Fullname>
                  <Email>{item.email}</Email>
                </div>
              </>  
              ))
            }
         </div>
        <ul>
          <li>
            <a href="#/">Gerenciar minha conta</a>
          </li>
          <li>
            <a href="#/">Item</a>
          </li>
          <li>
            <Link href="#/">Sair do sistema</Link>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
};

export default LoggedIn;
