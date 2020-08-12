import React, { useState, useEffect } from 'react'

import Aside from './../../components/Aside'
import Header from './../../components/header'
import Clients from './../../components/Clients'
import Thumb from './../../components/Thumb'
import Card from './../../components/Card'

import back from './../../assets/back.png'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css"
import moment from 'moment'

import { Line } from 'rc-progress'
import CalcItemsCart from './../../utils/AmountCart'
import FormatNumber from './../../utils/FormatNumber'
import ButtonSquare from '../../components/ButtonSquare'
import Divisor from '../../components/Divisor'

function Checkout() {
    const [clientsChoise, setClientsChoise] = useState([])
    const [productsChoise, setProductChoise] = useState([])
    const [date, setDate] = useState(new Date())
    const [dateInput, setDateInput] = useState("")
    const [showCalendar, setShowCalendar] = useState(false)
    const [statusPayment, setStatusPayment] = useState("")

    useEffect(() => {
      loadData();
    }, [])

    const loadData = () => {
        const productsChoise = localStorage.getItem("cart")
        const productsParse = JSON.parse(productsChoise)
        const clientsStore = localStorage.getItem("clients")
        const clientsParse = JSON.parse(clientsStore);
        setProductChoise(productsParse);
        setClientsChoise(clientsParse)
    };

    const renderClients = () => {
        return clientsChoise.map((i) => (
            <Clients key={i.id} clients={[]} item={i} select={() => null} />
        ));
    };

    const onChangeDate = (date) => {
        setDateInput(formateBrDate(date));
        setDate(date);
        setShowCalendar(false)
    }

    const renderCalendar = () => {
        if(showCalendar) {
            return (
                <div>
                    <Calendar
                    onChange={(date) => onChangeDate(date)}
                    value={date}
                     />
                </div>
            )
        }
    }

    const formateBrDate = (date) => {
        const dateFormate = moment(date).format("DD/MM/YYYY");
        return dateFormate
    }

    const renderProducts = () => {
        return productsChoise.map((i) => {
            return (
                <Card >
                <div>
                    <Thumb style={{width: "10%", height: "10%"}} src={i.img} alt="avatar" />
                    <p style={{paddingLeft: "20%", paddingTop: "1%"}}>{i.name}</p>
                    <p style={{float: "right", marginTop: "-4%", marginRight: "3%"}}>{FormatNumber(i.price)}</p>
                </div>
                <p>{i.observation}</p>
            </Card>
            )

        })
    }



    return (
        <div className="container-cart-grid">
          <Aside />
          <div className="main-cart-grid">
                
               <div>
                   <div>
                       <div style={{margin: "10%", marginTop: "13.5%"}}>
                           <Link to="/dashboard/client">
                               <img src={back} alt="back" />
                           </Link>
                           <h3>Novo Pedido</h3>
                           <Divisor />
                       </div>
                       <div >
                           <h1 style={{marginLeft: "10%"}}>Produtos</h1>
                            {renderProducts()}
                       </div>
                       <div />
                       <div>
                           <h1 style={{marginLeft: "10%"}}>Clientes</h1>
                           <div style={{marginTop: "4%"}}>
                           {renderClients()}

                           </div>
                       </div>
                       <div />
                       <div/>
                       <div>
                           <h5 style={{marginLeft: "10%", marginTop: "5%"}}>Total</h5>
                           <h5 style={{marginLeft: "80%", marginTop: "-6.5%"}}>{CalcItemsCart(productsChoise)}</h5>
                       </div>
                   </div>
               </div>




          </div>
          <div className="main-aside-cart-grid">
             <div>
                 <Header />
                 <div>
                     <h1>informações para o pedido</h1>
                     <Divisor style={{width: "50%"}} />
                 </div>
                 <div>
                     <p>
                         Preencha as informações abaixo para concluir esta venda.
                     </p>
                 </div>
                 <div>
                     <p>
                         Passo 3 de 3
                     </p>
                 </div>
                 <Line 
                     percent="100"
                     style={{width: "90%"}}
                     strokeWidth="3"
                     strokeColor="#ff8822"
                     trailWidth={3}
                     trailColor={"#E6E6E6"}

                 />
                 <div>
                     <p>
                         Qual o status de pagamento?
                     </p>
                 </div>
                 <Card>
                                      <div>
                                      <input 
                                          style={{marginLeft: "6%"}}
                                          type="radio"
                             id="male"
                             name="name"
                             onChange={(e) => setStatusPayment(true)}
                             value={statusPayment} 
                                      />
                                      <label style={{ fontWeight: "normal", marginTop: "5%", marginLeft: "8%", fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,0.56)"}}>Não está pago</label>
                                      </div>
                                      <div></div>
                                   </Card>
                                   <Card>
                                      <div>
                                      <input 
                                          style={{marginLeft: "6%"}}
                                          type="radio"
                             id="male"
                             name="name"
                             onChange={(e) => setStatusPayment(true)}
                             value={statusPayment}
                                      />
                                      <label style={{ fontWeight: "normal", marginTop: "5%", marginLeft: "8%", fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,0.56)"}}>Já está pago.</label>
                                      </div>
                                      <div></div>
                                   </Card>
               
                 {renderCalendar()}
                 <div>
                     <h6>Em qual data foi realizado?</h6>
                    
                     <label style={{marginBottom: "1.5%"}} for="inputDateTime" class="sr-only">Data do pedido</label>
  <input style={{height: "50px", marginTop: "2%" }} type="text" id="inputDateTime" class="white form-control mt-3 form-shape"
        onClick={() => setShowCalendar(!showCalendar)}
                               placeholder=" "
                               type="text"
                               value={dateInput}
                               onChange={(e) => console.log(e.target.value)}
  />
                    
                    
                   
                 </div>
                
                     <Link to="/dashboard/feedback">
                     <ButtonSquare style={{ marginLeft: "20%", marginTop: "1%"}}
                       disabled={statusPayment && dateInput ? false : true}
                           opacity={dateInput && statusPayment ? 1 : 0.5}
                        >
                           SALVAR
                     </ButtonSquare>
                         
                     </Link>
                
             </div>
          </div>
            
        </div>
    )
}

export default Checkout;
