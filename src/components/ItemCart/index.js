import React from 'react';

import Card from './../Card'
import Thumb from './../Thumb'

import { BsCheckCircle } from 'react-icons/bs';
import FormatNumber from './../../utils/FormatNumber';
import "./styles.css"

function ItemCart({ item, renderDetail, cart }) {

    const inCart = cart.find((i) => i.id === item.id);

    return (
        <Card onClick={() => renderDetail(item)}  className="">
        { inCart? (
            <div>
                <BsCheckCircle color={"#FFFFFF"} size={25} />
            </div>
        )    :    (
        <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />
                  )
        }
        <p className="iten-name">{item.name}</p>
        <p className="iten-price">{FormatNumber(item.price)}</p>
       
        </Card>
    )
}

export default ItemCart;
