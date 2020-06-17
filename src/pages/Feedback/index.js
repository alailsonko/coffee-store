import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Aside from './../../components/Aside'
import Header from './../../components/header'
import Button from './../../components/Button'

import avatarNav from './../../assets/avatar-navbar.svg'
import feedback from './../../assets/feedback.svg'

function Feedback() {
    return (
        <div className="container-grid">
            <Aside />
            <div className="grid-main">
            <div>
                <Header />
            </div>
            <section style={{margin: "10%", marginLeft: "18%", marginTop: "5%"}}>
                <div style={{marginLeft: "28%"}}>
                    <img src={feedback} alt="feedback" />
                </div>
                <div>
               
                <Link to="/dashboard">
                      <button
                      
                      style={{

                        outline: "none! important",
    cursor: "pointer",
    color: "black",
    background: "white",
    fontSize: "1em",
    margin: "0em 0em 0em 2.3em",
    padding: "0.25em 1em",
    border: "2px solid black",
    borderRadius: "100px",
    width: "328px",
    height: "48px",
    
   


                      }}
                      
                      
                      >
                          VOLTAR PARA LISTA DE PEDIDOS
                      </button>
                  </Link>
                
                 <Link to="/dashboard/cart">
                      <Button>
                          FAZER NOVO PEDIDO
                      </Button>
                  </Link>
                   
                </div>
            </section>
            </div>
           
        </div>
    )
}


 

export default Feedback;