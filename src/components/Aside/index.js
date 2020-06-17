import React from 'react'
import styled from "styled-components";

import iconOrder from "../../assets/list.svg";
import avatar from "../../assets/avatar-user-side.svg";
import book from './../../assets/book.svg'


function Aside() {
    return (
        <AsideStyled>
             <div className="icon-aside logo white"/>
             <Content  style={{marginTop: "55%"}}>
         

          <div   className={"orders-aside"}>
            <div style={{marginLeft: "15%"}}>
              <img alt="icon" src={iconOrder} />
              <p style={{marginTop: "4.5%", marginLeft: "15%"}}>pedidos</p>
            </div>
          </div>
          <div style={{marginLeft: "20%"}} className={"orders-open"}>
            <p>| Em abertos</p>
            <p className={"orders-closed"}>Encerrados</p>
          </div>
          <div></div>
          <div  className={"content-clients"}>
            <div style={{marginLeft:  "20%"}}>
              <img alt="icon" src={avatar} />
              <p style={{marginTop: "10%", marginLeft: "20%"}}>Clientes</p>
            </div>
          </div>
          <footer className={"footer-sidebar"}>
            {/* Infoway Gestão em Saúde ©, 2019. */}
          </footer>
        </Content>
 
        </AsideStyled>
    )
}






const AsideStyled = styled.aside`
   
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

/* Primary */

background: #FF8822;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`
const ButtonAside = styled.div`
    cursor: pointer;
   
    
    width: 100%;
    height:  45px;
    &:hover {
        background: white;
        color: #FF8822

    }
    div {
        margin-left: 20%;
        margin-top: -10%;
    }
    h4, h6 {
     height: auto;
     color: white;
     margin-left: 20%;
     margin-top: -18.5%;
     &:hover{
         color: #FF8822
     }

    }
`


 

const Content = styled.section`
  margin-top: 21%;

  .logo-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .orders-aside {
    background: #ffffff;
    position: absolute;
    width: 342px;
    height: 56px;
    display: flex;
    margin-top: -5%;
    > div {
      display: flex;
      width: 22%;
      justify-content: center;
    }
    p {
      position: absolute;
      width: 108px;
      height: 22px;
      left: 68px;
    
      /* top: 233px; */

      /* Button */

      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;

      /* identical to box height, or 157% */

      text-transform: uppercase;

      /* Primary */

      color: #ff8822;
    }
  }
  .orders-open {
    margin-top: 71%;

    padding-left: 12%;
    display: flex;
    flex-direction: column;

    > p {
      /* Button */

      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */

      text-transform: uppercase;

      color: #ffffff;
    }
  }
  .orders-closed {
    font-family: "Open Sans";
    padding-left: 4%;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.54);
  }
  .content-clients {
    padding-left: 15%;

    > div {
      display: flex;
      width: 14%;

      justify-content: center;
      img {
        opacity: 0.5;
        margin-right: 29%;
      }
    }
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      opacity: 0.5;
      /* identical to box height, or 157% */

      text-transform: uppercase;

      /* White */

      color: #ffffff;
    }
  }
  .footer-sidebar {
    position: absolute;
    width: 196px;
    height: 18px;
    left: 73px;
    top: 428px;

    /* Caption */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    /* White */

    color: #ffffff;
  }
`;

export default Aside;
 