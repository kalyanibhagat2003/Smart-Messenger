function Signup({

  name,

  setName,

  email,

  setEmail,

  password,

  setPassword,

  handleSignup,

  switchPage,

}) {

  return (

    <div className="auth-container">

      <h1>Sign Up</h1>

      <input

        type="text"

        placeholder="Name"

        value={name}

        onChange={(e)=>

          setName(e.target.value)

        }

      />

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

      <button onClick={handleSignup}>

        Sign Up

      </button>

      <p>

        Already have an account?

        <span onClick={switchPage}>

          Login

        </span>

      </p>

    </div>

  );

}

export default Signup;