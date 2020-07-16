import React, {Component, useState} from 'react';
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

const handleSubmit=()=>{
  let obj={};
  obj.email=state.email;
  obj.password=state.password;  
  fetch('http://localhost/3000/login',
  {
    header: {
      'Accept': 'application/json',
      "Content-Type":"application/json"
    },
    method: 'POST',
    body: JSON.stringify({obj})
  })
  .then((response)=>{
    response.json().then((result)=>{
      console.warn("result",result);
      alert("result"+result);
      localStorage.setItem('login',JSON.stringify({
        login:true,
        token:result.token
      }))
      setState({login:true})
    })
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
    <form className={style.loginform}>
      <input className={style.forminput} value={state.email} onChange={handleChange} id="email" type="text" placeholder="email"/>
      <input className={style.forminput} value={state.password} onChange={handleChange} id="password" type="password" placeholder="password"/>
      <button className={style.formbutton} onClick={handleSubmit}>login</button>
    </form>
    </div>
    </div>
    :
    <div>logined</div>
};
  </article>
  )
}

export default LoginPage;