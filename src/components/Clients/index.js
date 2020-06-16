import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import Card from './../Card'
import Thumb from '../Thumb';

function Clients({item, clients, select}) {
const inList = clients.find((i) => i.id === item.id);


    return (
        <Card key={item.id}>
            <div>
                <div style={{cursor: "pointer"}} onClick={() => select(item)} >
                    {inList ? (
                       <div>
                           <BsCheckCircle color={"#FFFFFF"} size={25} />
                       </div>
                    )  :  (
                     <Thumb src={item.avatar} alt="item" />
                    )} 
                </div>
                <p>{item.name}</p>
            </div>
        </Card>
    )
}

export default Clients;