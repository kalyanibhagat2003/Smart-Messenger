import { useState } from "react";

import Login from "./login";

import Signup from "./signup";

function Auth({

  setIsLoggedIn,

}) {

  const [isLogin,setIsLogin] =

  useState(true);

  const [name,setName] =

  useState("");

  const [email,setEmail] =

  useState("");

  const [password,setPassword] =

  useState("");

  function handleSignup(){

    const user={

      name,

      email,

      password,

    };

    localStorage.setItem(

      "user",

      JSON.stringify(user)

    );

    alert("Signup successful");

    setIsLogin(true);

  }

  function handleLogin(){

    const user=

    JSON.parse(

      localStorage.getItem("user")

    );

    if(

      user?.email===email &&

      user?.password===password

    ){

      localStorage.setItem(

        "isLoggedIn",

        "true"

      );

      setIsLoggedIn(true);

    }

    else{

      alert("Invalid credentials");

    }

  }

  return (

    isLogin

    ?

    <Login

      email={email}

      setEmail={setEmail}

      password={password}

      setPassword={setPassword}

      handleLogin={handleLogin}

      switchPage={()=>

        setIsLogin(false)

      }

    />

    :

    <Signup

      name={name}

      setName={setName}

      email={email}

      setEmail={setEmail}

      password={password}

      setPassword={setPassword}

      handleSignup={handleSignup}

      switchPage={()=>

        setIsLogin(true)

      }

    />

  );

}

export default Auth;