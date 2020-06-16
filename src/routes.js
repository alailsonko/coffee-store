import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Client from './pages/Client'
import Checkout from './pages/Checkout'
import Feedback from './pages/Feedback'

function Routes() {
    return (
        <>
         <Router>
             <Switch>
                 <Route exact path="/" component={Login} />
                
                 <Route exact path="/dashboard" component={Dashboard} />
                 <Route exact path="/dashboard/cart" component={Cart} />
                 <Route exact path="/dashboard/client" component={Client} />
                 <Route exact path="/dashboard/checkout" component={Checkout} />
                 <Route exact path="/dashboard/feedback" component={Feedback} />
                 <Route exact path="/dashboard/:id" component={Details} />

             </Switch>
         </Router>   
        </>
    )
}

export default Routes;
