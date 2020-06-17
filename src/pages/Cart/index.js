import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Line } from 'rc-progress'
import { IoMdAdd } from 'react-icons/io'
import { IoMdRemove } from 'react-icons/io'

import back from "../../assets/back.png";
import arrow from "../../assets/arrow-right.svg";
import ilustration from './../../assets/Illustration.png'

import Aside from './../../components/Aside'
import Icon from './../../components/Icon'
import Input from './../../components/Input'
import Card from './../../components/Card'
import Thumb from './../../components/Thumb'
import Header from './../../components/header'
import ItemCart from './../../components/ItemCart'
import ButtonSquare from './../../components/ButtonSquare'
import ButtonSquareLarge from './../../components/ButtonSquareLarge'
import Divisor from './../../components/Divisor'

import FormatNumber from './../../utils/FormatNumber'
import AmountCart from './../../utils/AmountCart'

import api from './../../services/products/api'


import "./styles.css"

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
                <ButtonSquareLarge >
                   <p style={{float: "left"}}>Total: {AmountCart(cart)}</p>
                 <Link className="icon-white" onClick={() => saveCart()} to="/dashboard/client">
                
                       <p>Avançar</p>
                      <Icon style={{float: "right", marginTop: "-10%"}} className="fa fa-angle-right fa-2x"></Icon>

                  
                 </Link>
                
                </ButtonSquareLarge>
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
                      <Link to="/dashboard">
                      <img  src={back} alt="back" />
                      </Link>
                   
                        <h3>Novo Pedido</h3>
                        <Divisor />
                    </div>

                    <div style={{marginLeft: "24%", marginTop: "15%"}} className="mob-pos-ilus">
                    <img src={ilustration} alt="Ilustration" />
                    </div>

                </div> 
             


                </div> 
            

               )}

              {showDetail && (
                <div> {/*  start-content-product */}

                            
                <div>  {/* start-Content-new-order */}
                    
                    <div  style={{margin: "10%", marginTop: "13.6%"}}>
                      <Link to="/dashboard">
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
                           <Link>
                           <div onClick={() => setShowDetail(false)}>
                                   <img src={back} alt="back" />
                               </div>
                           </Link>
                              
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
                                  <h6 style={{marginLeft: "3.5%", marginTop: "6%", marginBottom: "0"}}>Observações</h6>
                                     <div>
                                     <label for="inputObservation" style={{marginBottom: "8px", marginLeft: "8px"}} class="sr-only">Observações</label>
                                    <input type="text" id="inputObservation" style={{height: "50px", width: "94%", marginLeft: "4%", marginRight: ""}} class="white form-control mt-3 form-shape" placeholder="Observações"/>
                                     </div>
                                  </div>
                                   
                                   {option && (
                                       <div style={{marginTop: "5%"}}>
                                          <div style={{margin: "15%"}}>
                                           
                                            <IoMdRemove
                                            
                                                color={"#FF8822"}
                                                onClick={() => decrementItem()}
                                              />
                                              {increment}
                                              <IoMdAdd 
                                                  color={"#FF8822"}
                                                  onClick={() => incrementItem()}
                                              />
                                           
                                            
                                           
                                             <ButtonSquare style={{marginLeft: "10%"}} type="button" onClick={() => addCart(itemDetail)} >
                                                Adicionar {amountItem(itemDetail.price, increment)}
                                             </ButtonSquare>
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

 
 
export default Cart;

