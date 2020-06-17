import React from 'react';
import { Link } from 'react-router-dom';

import Main from './../../components/Main'
import Thumb from './../../components/Thumb';
import Card from './../../components/Card';
import Aside from './../../components/Aside';
import Input from './../../components/Input';
import Avatar from './../../components/Avatar';
import Icon from './../../components/Icon';
import Welcome from './../../components/Welcome';
import Typography from './../../components/Typography';

import './styles.css';
import Header from '../../components/header';
import styled from 'styled-components';

function Dashboard() {
    return (
        <>
        <div className="container-grid">
    
        <Aside className="grid-aside"/>
          <Main className="grid-main">
           <Header />
          <Welcome>
            <Typography style={{"paddingTop":"3%"}}>Olá, Vanusa</Typography>
          </Welcome>
          <Link className="icon-white" to="/dashboard/cart">
          <Card style={{"cursor": "pointer"}} className="">
          <div className="row">
          <Icon style={{paddingLeft: "2.2%"}} className="fas fa-plus fa-2x icon-orange"></Icon>
            <p style={{ fontSize:"24px",marginLeft: "6%", marginTop: "2.3%" }}>
            Fazer Novo Pedido
            </p>
          </div>
          </Card>
          </Link>

          <div className="input-group">
          <div className="input-group-addon">
          <span>
          <Icon style={{"marginLeft":"40px","position": "absolute"}} className="fas fa-search fa-2x icon-orange"></Icon>

          </span>
          <span>
          <Icon style={{"marginLeft":"93%","position": "absolute"}} className="fas fa-sliders-h fa-2x icon-orange"></Icon>

          </span>
          </div>

          <Input style={{"text-indent": "50px"}} className="" placeholder="Pesquise algum cliente" type="search" autoFocus></Input>
            
          </div>
           <h6 className="ml-5">13/05/2019,<span className="text-muted"> Você vendeu</span> R$ 45,80</h6>
          <Link to="/dashboard/1">
          <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />
           <NameClient className="">Lorem Ipsum</NameClient>
            <Caption >some new text about the project</Caption>
            <PriceNegrito>R$ 45,90</PriceNegrito>
           </Card>
          </Link>
        
          <Link to="/dashboard/2">
          <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />
           <NameClient className="">Lorem Ipsum</NameClient>
            <Caption >some new text about the project</Caption>
            <PriceNegrito>R$ 45,90</PriceNegrito>
           </Card>
          </Link>  

          <Link to="/dashboard/3">
          <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />
           <NameClient className="">Lorem Ipsum</NameClient>
            <Caption >some new text about the project</Caption>
            <PriceNegrito>R$ 45,90</PriceNegrito>
           </Card>
          </Link>

           <h6 className="ml-5">13/05/2019,<span className="text-muted"> Você vendeu</span> R$ 123,50</h6>

           <Link to="/dashboard/4">
          <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />
           <NameClient className="">Lorem Ipsum</NameClient>
            <Caption >some new text about the project</Caption>
            <PriceNegrito>R$ 45,90</PriceNegrito>
           </Card>
          </Link>

          <Link to="/dashboard/5">
          <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />
           <NameClient className="">Lorem Ipsum</NameClient>
            <Caption >some new text about the project</Caption>
            <PriceNegrito>R$ 45,90</PriceNegrito>
           </Card>
          </Link>
 
          </Main> 
         
  

        </div>
         



        </>
    )
}

const NameClient = styled.h6`
   float: left;
   margin-left: 4%;

`
const Caption = styled.p`
   float: left;
   margin-top: 25px;
   margin-left: -10%;
   font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.54);
`
const PriceNegrito = styled.h6`
     float: right;
`


export default Dashboard;
