import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom"

import Aside from "./../../components/Aside";
import Header from './../../components/header'
import Clients from './../../components/Clients'
import Icon from './../../components/Icon'
import Input from './../../components/Input'
import Card from './../../components/Card'
import ButtonSquareLarge from './../../components/ButtonSquareLarge'
import Divisor from './../../components/Divisor'

import { Line } from 'rc-progress'
import CalcItensCart from './../../utils/AmountCart'
import FormatNumber from './../../utils/FormatNumber'

import back from './../../assets/back.png'
import arrow from './../../assets/arrow-right.svg'
import avatar1 from "../../assets/avatar1.svg";
import avatar2 from "../../assets/avatar2.svg";
import avatar3 from "../../assets/avatar3.svg";
import avatar4 from "../../assets/avatar4.svg";
import avatar5 from "../../assets/avatar5.svg";
import Thumb from '../../components/Thumb';

const listClients = [
    {
        id: 1,
        name: "justine Marshall",
        avatar: avatar1,
    },
    {
        id: 2,
        name: "Bairam Frootan",
        avatar: avatar2,
    },
    {
        id: 3,
        name: "Tua Manuera",
        avatar: avatar3
    },
    {
        id: 4,
        name: "Justine Marshall",
        avatar: avatar4,
    },
    {
        id: 5,
        name: "Bairam Frootan",
        avatar: avatar5
    }
]

function Client() {
   const [clients, setClients] = useState(listClients)
   const [search, setSearch] = useState("")
   const [clientsChoise, setClientsChoise] = useState([])
   const [productsChoise, setProductsChoise] = useState([])

   useEffect(() => {
       loadProducts();
   }, [])

   const loadProducts = () => {
       const productsStore = localStorage.getItem("cart");
       const productsParse = JSON.parse(productsStore);
       setProductsChoise(productsParse);
   };

   const addClient = (item) => {
       const formatItem = {
           id: item.id,
           name: item.name,
           avatar: item.avatar,
       }
       const findClient = clientsChoise.find((i) => i.id === formatItem.id);
       if (!findClient) {
           setClientsChoise([...clientsChoise, formatItem]);
       } else {
           const filterClientChoise = clientsChoise.filter(
               (i) => i.id !== formatItem.id
           );
           setClientsChoise(filterClientChoise);
       }
   };

   function renderItens() {
       return clients.map((item) => (
           <Clients 
              key={item.id}
              clients={clientsChoise}
              item={item}
              select={() => addClient(item)}
            />
       ));
   }

   const saveClients = () => {
       localStorage.setItem("clients", JSON.stringify(clientsChoise))
   };

   const renderClientsChoise = () => {
       if(clientsChoise.length > 0) {
           return (
            <Link onClick={() => saveClients()} to="/dashboard/checkout">

               <ButtonSquareLarge>
                  <div style={{float: "left", marginTop: "1.5%"}}>
                  <p>
                       {clientsChoise.length}{" "}
                       {clientsChoise.length > 1 ? "clientes" : "cliente"}{" "}
                       {clientsChoise.length > 1 ? "selecionados" : "selecionado"}
                   </p>
                  </div>
                  
                      <div>
                      <Link>
                      <p  style={{float: "right", marginRight: "5%", marginTop: "1.5%"}}>Avançar</p>

                      </Link>
                      
                          <img  style={{float: "right", marginRight: "-16%", marginTop: "3.0%"}} src={arrow} alt="avançar" />
                    
            
                      </div>
                         
               </ButtonSquareLarge>
                </Link>
           )
       }
   }

   const searchFilterFunction = (text) => {
       setSearch(text);

       const newData = clients.filter((item) => {
           const itemData = `${item.name.toUpperCase()} ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
           const textData = text.toUpperCase();

           return itemData.indexOf(textData) > -1;
       });
       setClients(newData);
       if (text.length === 0) {
           setClients(listClients)
       }
   };


    return (
        <div className="container-cart-grid">
           <Aside />
           <div className="main-cart-grid">
              <div>
                  <div>
                      <div style={{margin: "10%", marginTop: "13%"}}>
                          <Link to="/dashboard/cart">
                              <img src={back} alt="back" />
                          </Link>
                          <h3>Novo Pedido</h3>
                          <Divisor />
                      </div>
                  </div>
                  <div>
                      <h1>Produtos</h1>
                      {productsChoise.map((i) => {
                         return( <Card key={i.id}>
                            <div>
                                <Thumb src={i.img} alt="avatar" />
                                <p>{i.name}</p>
                                <p>
                                    {FormatNumber(i.price)}
                                </p>
                            </div>
                            <p>{i.observation}</p>
                          </Card>)
                 })}
                  </div>
                  <div>
                  <div>
                           <h5 style={{marginLeft: "5%", marginTop: "5%"}}>Total</h5>
                           <h5 style={{marginLeft: "80%", marginTop: "-6.5%"}}>{CalcItensCart(productsChoise)}</h5>
                       </div>
                  </div>
              </div>
           </div>
            <div className="main-aside-cart-grid">
                 <div>
                     <Header />
                     <div>
                         <h1>Informações para o Pedido</h1>
                         <Divisor style={{width: "40%"}} />
                     </div>
                     <div>
                         <p>
                  Preencha as informações abaixo para concluir esta venda.
                         </p>
                     </div>
                     <div>
                         <p>
                             Passo 2 de 3
                         </p>
                     </div>
                     <Line 
                         percent="66"
                         style={{width: "90%"}}
                         strokeWidth="3"
                         strokeColor="#ff8822"
                         trailWidth={3}
                         trailColor={"#E6E6E6"}
                     />
                     <div>
                         <p>
                             Para quem você está vendendo?
                         </p>
                     </div>
                     <div>
                     <div className="input-group">
          <div className="input-group-addon">
          <span>
          <Icon style={{"marginLeft":"26px", marginTop: "15px","position": "absolute"}} className="fas fa-search fa-2x icon-orange"></Icon>

          </span>
         
          </div>

          <Input style={{"text-indent": "50px"}} className="" placeholder="Pesquise algum cliente" type="search" autoFocus></Input>
            
          </div>
                     </div>
                     {renderItens()}
                     {renderClientsChoise()}
                 </div>
            </div>
        </div>
    )
}

export default Client;
