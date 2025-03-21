import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({handleLogin}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async (event) => {
    event.preventDefault()
    await handleLogin(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <div data-testid='login-form'>
      <h2>Log in to application</h2>
      <form onSubmit={login}>
        <div className='display-flex-gap'>
          Username
          <input
            data-testid='username-input'
            type='text'
            value={username}
            name='Username'
            onChange={({target}) => setUsername(target.value)}
          />
        </div>
        <div className='display-flex-gap'>
          Password
          <input
            data-testid='password-input'
            type='password'
            value={password}
            name='Password'
            onChange={({target}) => setPassword(target.value)}
          />
        </div>
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginForm