function Login({

  email,

  setEmail,

  password,

  setPassword,

  handleLogin,

  switchPage,

}) {

  return (

    <div className="auth-container">

      <h1>Login</h1>

      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e)=>

          setEmail(e.target.value)

        }

      />

      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>

          setPassword(e.target.value)

        }

      />

      <button onClick={handleLogin}>

        Login

      </button>

      <p>

        Don't have an account?

        <span onClick={switchPage}>

          Sign Up

        </span>

      </p>

    </div>

  );

}

export default Login;