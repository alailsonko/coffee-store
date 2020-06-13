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
          <Link to="/dashboard/cart">
          <Card style={{"cursor": "pointer"}} className="">
          <Icon className="fas fa-plus fa-2x icon-orange"></Icon>
          
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
          <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>
           <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>           
           <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>
           <h6 className="ml-5">13/05/2019,<span className="text-muted"> Você vendeu</span> R$ 123,50</h6>

           <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>
           <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>
 
          </Main> 
         
  

        </div>
         



        </>
    )
}


export default Dashboard;
