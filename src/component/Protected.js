import React,{useState,useEffect}from 'react'

function Login(props) {

    let Cmp = props.Cmp;

    
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            window.location.href="/register"
        }
    },[])

  return (
        <Cmp/>
  );
}

export default Login;
