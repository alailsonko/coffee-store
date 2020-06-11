import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Login from './pages/Login'

function Routes() {
    return (
        <>
         <Router>
             <Switch>
                 <Route exact to="/" component={Login} />
             </Switch>
         </Router>   
        </>
    )
}

export default Routes;
