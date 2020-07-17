import React, {Component, useState, useEffect} from 'react';
import { Link, Switch } from 'react-router-dom';
import queryString from 'query-string';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
import style from './LoginPage.css';

function LoginPage (props) {

  const[state,setState]=useState({
    email:"",
    password:"",
    login:false,
    token:null,
    store:null
  });

  useEffect(()=>{
    storeCollector()
  },[]);

  const storeCollector = () =>
  {
    let store=JSON.parse(localStorage.getItem("login"));
    if(store && store.login){
      setState({login:true,store:store})
    }
  }

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
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify(user)    
  })
  .then((response)=>{
    response.json().then((result)=>{      
      console.warn(result.access_token)
      localStorage.setItem("login",JSON.stringify({
        token:result.access_token,
        login:true
      }))
      storeCollector()
    });
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
    <div>logined as
      <div>
    <Link to="/dashboard"><button className={style.button} type="button">
    To dashboard
    </button>
    </Link>
  </div>
  <div>
    <Link to="/"><button className={style.button} type="button">
    To not found page?!
    </button>
    </Link>
  </div>
  </div>
}
  </article>
  )
}

export default LoginPage;