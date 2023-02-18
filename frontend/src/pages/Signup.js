import { useState } from "react"
import { useSignup } from "../hooks/useSignup"


const Signup = () => { 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { error, isLoading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault() 
    console.log(email, password)

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label htmlFor="">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <h3>Password</h3>
      <label htmlFor="">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
