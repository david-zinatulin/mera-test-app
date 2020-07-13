import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
import style from './LoginPage.css';

function LoginPage (props) {

  const[state,setState]=useState({
    username:"",
    password:""
  });

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

const handleSubmit=()=>{
  alert('Email address is ' + state.username + ' Password is ' + state.password);            
}

return(
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className={style.loginpage}>
    <div className={style.form}>
    <form className={style.loginform}>
      <input className={style.forminput} value={state.username} onChange={handleChange} id="username" type="text" placeholder="username"/>
      <input className={style.forminput} value={state.password} onChange={handleChange} id="password" type="password" placeholder="password"/>
      <button className={style.formbutton} onClick={handleSubmit}>login</button>
      <p className={style.message}>Not registered? <a href="#">Create an account</a></p>
    </form>
    </div>
    </div>
  </article>
  )
}

export default LoginPage;