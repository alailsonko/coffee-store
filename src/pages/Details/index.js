import React from 'react'

import Aside from './../../components/Aside'
import Main from './../../components/Main'
import Welcome from './../../components/Welcome'
import Typography from './../../components/Typography'
import Card from './../../components/Card'
import Thumb from './../../components/Thumb'
import Icon from './../../components/Icon'
import Header from '../../components/header'

function Details() {
    return (
        <div className="container-grid">
            <Aside className="grid-aside"/>
            <Main className="grid-main">
            <Header />
              <Welcome style={{"height":"80px"}} className="">
                  <Icon className="fa fa-angle-left fa-2x"></Icon>
                  <Typography style={{"paddingBottom":"3%"}}  className="mt-0">lorem ipsum</Typography>
              </Welcome>
           <h6 className="ml-5">13/05/2019</h6>
           <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>

           <h6 className="ml-5">13/05/2019</h6>
           <Card className="btn">
           <Thumb className="Thumb-di " src="https://picsum.photos/200/300" />

           </Card>
            </Main>
        </div>
    )
}

export default Details;
