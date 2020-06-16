import React, { useState, useEffect } from 'react'

import Aside from './../../components/Aside'
import Header from './../../components/header'
import Clients from './../../components/Clients'
import Thumb from './../../components/Thumb'

import back from './../../assets/back.png'
import { Link } from 'react-router-dom'
import calendarImage from './../../assets/calendar.svg'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css"
import moment from 'moment'

import { Line } from 'rc-progress'
import CalcItemsCart from './../../utils/AmountCart'
import FormatNumber from './../../utils/FormatNumber'

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
                <div>
                <div>
                    <Thumb src={i.id} alt="avatar" />
                    <p>{i.name}</p>
                    <p>{FormatNumber(i.price)}</p>
                </div>
                <p>{i.observation}</p>
            </div>
            )

        })
    }



    return (
        <div className="container-cart-grid">
          <Aside />
          <div className="main-cart-grid">
                
               <div>
                   <div>
                       <div>
                           <Link>
                               <img src={back} alt="back" />
                           </Link>
                           <h3>Novo Pedido</h3>
                           <div />
                       </div>
                       <div>
                           <h1>Produtos</h1>
                            {renderProducts()}
                       </div>
                       <div />
                       <div>
                           <h1>Clientes</h1>
                           {renderClients()}
                       </div>
                       <div />
                       <div/>
                       <div>
                           <p>Total</p>
                           <p>{CalcItemsCart(productsChoise)}</p>
                       </div>
                   </div>
               </div>




          </div>
          <div className="main-aside-cart-grid">
             <div>
                 <Header />
                 <div>
                     <h1>informações para o pedido</h1>
                     <div />
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
                 <div>
                     <div>
                         <input 
                             type="radio"
                             id="male"
                             name="name"
                             onChange={(e) => setStatusPayment(true)}
                             value={statusPayment} 
                         />
                         <label>Não está pago</label>
                     </div>
                     <div style={{}}></div>
                 </div>
                 <div>
                     <div>
                         <input 
                             type="radio"
                             id="male"
                             name="name"
                             onChange={(e) => setStatusPayment(true)}
                             value={statusPayment}
                         />
                         <label>Já está pago</label>
                     </div>
                     <div style={{}}></div>
                 </div>
                 {renderCalendar()}
                 <div>
                     <h6>Em qual data foi realizado?</h6>
                     <div>
                         <label>
                             <input
                               onClick={() => setShowCalendar(!showCalendar)}
                               placeholder=" "
                               type="text"
                               value={dateInput}
                               onChange={(e) => console.log(e.target.value)}
                              />
                              <span>Data do pedido</span>
                              <div>
                                  <img src={calendarImage} alt="calendar" />
                              </div>
                         </label>
                     </div>
                 </div>
                 <div>
                     <Link>
                         <button
                           disabled={statusPayment && dateInput ? false : true}
                           opacity={dateInput && statusPayment ? 1 : 0.5}
                         >
                            SALVAR
                         </button>
                     </Link>
                 </div>
             </div>
          </div>
            
        </div>
    )
}

export default Checkout;
