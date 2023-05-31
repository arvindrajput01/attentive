import React from 'react'
import Login from '../Login/Login';
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }
  return (
    <div className=' ml-3'>
        <h2>404Page</h2>
        <p>Redirect to <span className=' text-blue-900 font-bold cursor-pointer' onClick={routeChange}> Login page</span></p>
    </div>
  )
}

export default NoMatch;