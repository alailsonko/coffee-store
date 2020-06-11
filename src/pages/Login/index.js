import React from 'react'
import "./styles.css"
import Button from './../../components/Button'

function Login() {
    return (
        <div>
    <div className="icon-center logo orange"/>
    <form class="form-signin pd-top-md">
  <h3 className="text-center">Seja bem-vindo</h3>
  <p class="mb-3 text-center font-weight-normal">Nós sabemos a importância de estar sempre de barriga cheia e o quanto isso pode ajudar no seu dia.</p>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="white form-control form-shape" placeholder="Email address" required autofocus/>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="white form-control mt-3 form-shape" placeholder="Password" required/>
  <div class="checkbox mb-3">
    <div className="text-center text-upper">
      <span className="btn">RECUPERAR MINHA SENHA</span>  
    </div>
  </div>
  <Button>Entrar</Button>
  <p class="pd-top-lg text-center">Infoway Gestão em Saúde ©, 2019.</p>
</form> 
        </div>
    )
}

export default Login;
