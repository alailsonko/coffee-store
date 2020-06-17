import React from 'react';

import Card from './../Card'
import Thumb from './../Thumb'

import { BsCheckCircle } from 'react-icons/bs';
import FormatNumber from './../../utils/FormatNumber';
import "./styles.css"

function ItemCart({ item, renderDetail, cart }) {

    const inCart = cart.find((i) => i.id === item.id);

    return (
        <Card onClick={() => renderDetail(item)}  style={{cursor: "pointer"}}>
        { inCart? (
            <div className="row">
            <div style={{margin: "3.5%", marginLeft: "8%"}} className="icon-check-circle">
                <BsCheckCircle color={"#FFFFFF"} size={25} />
            </div>
            <div style={{marginLeft: "6%", }} className="col">
            <p className="iten-name">{item.name}</p>
        <p className="iten-price">{FormatNumber(item.price)}</p>
            </div>

            </div>

        )    :    (
            <div className="row">
            <div style={{marginLeft: "3%"}}>
            <Thumb style={{height: "60%"}} className="Thumb-di " src="https://picsum.photos/200/300" />
            </div>
            <div className="col" style={{marginLeft: "8%"}}>
            <p className="iten-name">{item.name}</p>
        <p className="iten-price">{FormatNumber(item.price)}</p>
            </div>

            </div>
 
                  )
        }

       
        </Card>
    )
}

export default ItemCart;
