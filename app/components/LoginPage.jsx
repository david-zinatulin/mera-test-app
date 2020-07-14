import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
import style from './LoginPage.css';

function LoginPage (props) {

  const[state,setState]=useState({
    email:"",
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
  alert('Email address is ' + state.email + ' Password is ' + state.password);//Просто проверка работоспособности кнопки  
  let obj={};
  obj.email=state.email;
  obj.password=state.password;  
  fetch('http://localhost/8080/login',
  {
    header: {
      "Content-Type":"application/json"
    },
    method: 'POST',
    body: JSON.stringify({obj})
  })
}

return(
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className={style.loginpage}>
    <div className={style.form}>
    <form className={style.loginform}>
      <input className={style.forminput} value={state.email} onChange={handleChange} id="email" type="text" placeholder="email"/>
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