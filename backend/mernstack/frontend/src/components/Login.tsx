import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'
import { AppDispatch } from '../redux/store'


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state:any) => state.auth)

  const onChange = (e:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  

  const onSubmit = (e:any) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
     .unwrap()
      .then((user:any) => {
        
        //toast.success(`Logged in as ${user.name}`)
        navigate('/products')
      })
      .catch(toast.error)
  }

  if (isLoading) {
    return <div >..... Loading</div>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          Login
        </h1>
        <p>Please log in to get support</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
