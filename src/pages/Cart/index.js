import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Line } from 'rc-progress'
import { IoMdAdd } from 'react-icons/io'
import { IoMdRemove } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'

import back from "../../assets/back.png";
import arrow from "../../assets/arrow-right.svg";
import ilustration from "../../assets/Illustration.png";

import Aside from './../../components/Aside'
import Welcome from './../../components/Welcome'
import Icon from './../../components/Icon'
import Typography from './../../components/Typography'
import Input from './../../components/Input'
import Card from './../../components/Card'
import Thumb from './../../components/Thumb'
import Header from './../../components/header'
import ItemCart from './../../components/ItemCart'

import FormatNumber from './../../utils/FormatNumber'
import AmountCart from './../../utils/AmountCart'

import api from './../../services/products/api'

import chefKitchen from './../../assets/chef-kitchen.svg'

import "./styles.css"
import styled from 'styled-components';

function Cart() {

    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [increment, setIncrement] = useState(1)
    const [showDetail, setShowDetail] = useState(false)
    const [itemDetail, setItemDetail] = useState({})
    const [option, setOption] = useState("")
    const [observation, setObservation] = useState("")
    const [cart, setCart] = useState([])


    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        try {
            let response = await api.fetchData();
            setProducts(response)
        } catch (e) {
            console.log(e)
        }
    };

    const addCart = (item) => {
        const formatItem = {
            id: item.id,
            observation,
            price: item.price,
            name: item.name,
            qnt: increment,
            img: item.imgItem
        }

        setCart([...cart, formatItem]);
        setShowDetail(false);
        setIncrement(1);
        setObservation("")
        setOption("")
    };
    
    const renderDetail = (item) => {
        setItemDetail(item);
        setShowDetail(true);
    };

    const amountItem = (price, increment) => {
        const amount = price * increment;
        return FormatNumber(amount)
    }

    function renderItems() {
        return products.map((item, index) => (
            <ItemCart 
                key={item.id}
                cart={cart}
                item={item}
                renderDetail={() => renderDetail(item)}
            />
        ))
    }


    const saveCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    const renderCart = () => {
        if(cart.length > 0) {
            return (
                <div className="cart-content">
                   <p>Total: {AmountCart(cart)}</p>
                 <Link onClick={() => saveCart()} to="/dashboard/client">
                 <div className="btn">
                       <p>Avançar</p>
                      <Icon className="fa fa-angle-right fa-2x"></Icon>

                   </div>
                 </Link>
                
                </div>
            )
        }
    }

    const decrementItem = () => {
        if(increment > 1) {
            setIncrement(increment - 1);
        }
    }

    const incrementItem = () => {
        setIncrement(increment + 1);
    }

    const searchFilterFunction = (text) => {
        setSearch(text);

        const newData = products.filter((item) => {
            const itemData = `${item.name.toUpperCase()} ${item.name.toUpperCase} ${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        setProducts(newData);
        if (text.length == 0) {
            loadData()
        }
    }

    return (
        <div className="container-cart-grid">
            <Aside />


             {/* start-main-grid */}
            <div className="main-cart-grid"> 
               {!showDetail && (
                <div> {/*  start-content-product */}

               
                <div>  {/* start-Content-new-order */}
                    
                    <div style={{margin: "10%", marginTop: "13.6%"}}>
                      <Link>
                      <img  src={back} alt="back" />
                      </Link>
                   
                        <h3>Novo Pedido</h3>
                        <Divisor />
                    </div>

                    <div style={{marginLeft: "24%", marginTop: "15%"}}>
                    <img src={ilustration} alt="Ilustration" />
                    </div>

                </div> 
             


                </div> 
            

               )}

              {showDetail && (
                <div> {/*  start-content-product */}

                            
                <div>  {/* start-Content-new-order */}
                    
                    <div  style={{margin: "10%", marginTop: "13.6%"}}>
                      <Link>
                      <img  src={back} alt="back" />
                      </Link>
                       
                        <h3>Novo Pedido</h3>
                         <Divisor />
                    </div>

                    <div  style={{marginLeft: "24%", marginTop: "15%"}}>
                    <img src={ilustration} alt="Ilustration" />
                    </div>

                </div> 



                </div> 
              )}


            
            </div>
             {/* end-main-grid */}
            
            <div className="main-aside-cart-grid">
              
                   {!showDetail && (
                   <div >   {/* start-description-order */}
                   <Header />
                       <div style={{marginLeft: "3%"}}>
                      <div style={{marginTop: "4.8%"}}> {/* start-content-info-order */}
                           <h3>Informações para o Pedido</h3>
                           <Divisor style={{width: "50%"}} />
                      </div>
                      <div> 
                        <p>
                            Preencha as informações abaixo para concluir esta venda.
                        </p>
                      </div> {/* end-content-info-order */}
                      <div>
                          <p>
                              Passo 1 de 3
                          </p>
                      </div>
                      <Line
                         percent="33"
                         style={{width: "90%"}}
                         strokeWidth="3"
                         strokeColor="#ff8822"
                         trailWidth={3}
                         trailColor={"#E6E6E6"}
                      />
                      <div >
                          <p>
                           O que você está vendendo?
                          </p>
                      </div>
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
                      {renderItems()}
                      {renderCart()}

                   </div>  
                   )}
                    
                    {showDetail && (
                                
                       <div>      {/* start-description-order */}    
                           
                           <Header />
                           <div style={{marginLeft: "3%"}}>
                               <div onClick={() => setShowDetail(false)}>
                                   <img src={back} alt="back" />
                               </div>
                               <h3>Detalhes do pedido</h3>
                               <Divisor />
                               <p>
                                   Aproveite para adicionar alguma observação para este pedido,
                                   caso queira
                               </p>
                           </div>
                            
                            {/* start-detail-order */}
                             
                                <Card>
                                    <div>
                                        <Thumb src={itemDetail && itemDetail.imgItem} alt="img item" />
                                    </div>
                                    <div>
                                        <p>
                                            {itemDetail && itemDetail.name}
                                        </p>
                                        <p>
                                            {itemDetail && FormatNumber(itemDetail.price)}
                                        </p>
                                    </div>
                                </Card>
                     
                            <div >
                               <h6 style={{marginTop:"7%", marginLeft: "3%"}}>opções</h6>

                              
                               <p style={{marginLeft: "3%"}}>
                                    Escolha dentre as opções de massas abaixo.
                                </p>
                              
                            </div>  
                            {itemDetail &&
                               itemDetail.options.map((option) => (
                                   <Card>
                                      <div>
                                      <input 
                                          style={{marginLeft: "6%"}}
                                          type="radio"
                                          id="option"
                                          name="option"
                                          onChange={(e) => setOption(e.target.value)}
                                          value={option.name}
                                      />
                                      <label style={{ fontWeight: "normal", marginTop: "5%", marginLeft: "8%", fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,0.56)"}}>{option.name}</label>
                                      </div>
                                      <div></div>
                                   </Card>
                               ))}               
                               
                               <div>
                                  <div>
                                  <h6>Observações</h6>
                                     <div>
                                        <label>
                                            <input 
                                                placeholder=" "
                                                type="text"
                                                onChange={(e) => setObservation(e.target.value)}
                                            />
                                            <span>Observações</span>
                                        </label>
                                     </div>
                                  </div>
                                   
                                   {option && (
                                       <div>
                                          <div>
                                              <IoMdRemove
                                                color={"#FF8822"}
                                                onClick={() => incrementItem()}
                                              />
                                          </div>
                                          <div>
                                             <button type="button" onClick={() => addCart(itemDetail)} >
                                                Adicionar {amountItem(itemDetail.price, increment)}
                                             </button>
                                          </div>
                                       </div>
                                   )}



                               </div>


                       </div>




                    )}
                   
      

            </div>
             

        </div>
    )
}


const Divisor = styled.div`
    background: #ff8822;
    width: 24%;

    display: flex;
    height: 3px;
    margin-left: 0%;
`
export default Cart;

