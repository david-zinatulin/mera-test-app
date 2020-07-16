import React, {Component, useState} from 'react';
import queryString from 'query-string';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
import style from './LoginPage.css';

function LoginPage (props) {

  const[state,setState]=useState({
    email:"",
    password:"",
    login:false
  });

  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

const handleSubmit= () => {
  console.warn(state.email+state.password);
  let obj={};
  obj.email=state.email;
  obj.password=state.password;
  let user = {
    email: 'davidzinatulin@gmail.com',
    password: 'TestPass123'
  };
  console.log(JSON.stringify(user))
  console.log(obj)  
  fetch(`https://api.peerberry.com/v1/investor/login`,
  {
    method: 'POST',
    header: {
      'Accept': 'application/json',
      "Content-Type":"application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
  })
}

return(
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    {
      !state.login?
    <div className={style.loginpage}>
    <div className={style.form}>
    
      <input className={style.forminput} value={state.email} onChange={handleChange} id="email" type="text" placeholder="email"/>
      <input className={style.forminput} value={state.password} onChange={handleChange} id="password" type="password" placeholder="password"/>
      <button className={style.formbutton} onClick={handleSubmit}>login</button>
    
    </div>
    </div>
    :
    <div>logined</div>
};
  </article>
  )
}

export default LoginPage;