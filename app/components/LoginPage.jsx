import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
<<<<<<< master
import style from './LoginPage.css';
const LoginPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className={style.loginPage}>
      Login
    </div>
  </article>
)
=======

const LoginPage = () =>{
  return (
  <div className="login-Page">
  <div className="form">    
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
  )
}
>>>>>>> Login html and css

export default LoginPage;