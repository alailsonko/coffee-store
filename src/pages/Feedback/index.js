import React from 'react'
import { Link } from 'react-router-dom'

import Aside from '../../components/Aside'

import avatarNav from './../../assets/avatar-navbar.svg'
import feedback from './../../assets/feedback.svg'

function Feedback() {
    return (
        <div className="container-grid">
            <Aside />
            <div className="grid-main">
            <div>
                <div>
                    <img src={avatarNav} alt="avatar nav" />
                </div>
            </div>
            <section>
                <div>
                    <img src={feedback} alt="feedback" />
                </div>
                <div>
                  <Link>
                      <button>
                          VOLTAR PARA LISTA DE PEDIDOS
                      </button>
                  </Link>
                  <Link>
                      <button>
                          FAZER NOVO PEDIDO
                      </button>
                  </Link>
                </div>
            </section>
            </div>
           
        </div>
    )
}

export default Feedback;