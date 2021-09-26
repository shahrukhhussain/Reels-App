import React from "react";
import {useEffect , useContext} from "react";
import {signInWithGoogle , auth} from "../firebase";
import {authContext} from "../AuthProvider";
import {Redirect} from "react-router-dom";


let Login = ()=>{

  let user = useContext(authContext);

  // useEffect( ()=>{
  //   auth.onAuthStateChanged((user)=>{
  //     console.log(user);
  //   })
  // } , [])
  return (
    
    <> 
    {user ? <Redirect to = "/" /> : ""}
      <button onClick = {()=>{
        signInWithGoogle();
      }}
      className="btn btn-primary m-4">Login with Google</button>

      </>
  )
}

export default Login;