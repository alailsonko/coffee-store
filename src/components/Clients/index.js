import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import Card from './../Card'
import Thumb from '../Thumb';

function Clients({item, clients, select}) {
const inList = clients.find((i) => i.id === item.id);


    return (
        <Card style={{cursor: "pointer"}} onClick={() => select(item)} key={item.id}>
            <div>
               
                    {inList ? (
                        <div className="row">
                       <span  style={{margin: "2.5%", marginLeft: "8%", marginTop: "4%"}} className="icon-check-circle">
                           <BsCheckCircle color={"#FFFFFF"} size={25} />
                       </span>
                <h4 style={{marginLeft: "3.4%", paddingTop: "3.9%"}}>{item.name}</h4>
                     </div>
                    )  :  (
                        <>
                     <Thumb style={{width: "12%", height: "12%"}} src={item.avatar} alt="item" />
                <h4 style={{marginLeft: "20%", paddingTop: "4%"}}>{item.name}</h4>
                   </>
                    )} 
               
            </div>
        </Card>
    )
}

export default Clients;