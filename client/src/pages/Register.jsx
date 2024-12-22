import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useRegisterUserMutation } from '../redux/features/auth/authApi'
import {toast} from "react-toastify"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [showPassword, setShowPassword] = useState(false)



  const [registerUser, {isloading} ] = useRegisterUserMutation()
  const navigate = useNavigate()
   const handleSubmit =async (e) => {
    e.preventDefault()
    const data = {
      username,
      email,
      password
    }
    console.log(data)
    try {
      const response = await registerUser(data).unwrap()
      console.log(response)
      toast.success(response.message)
      navigate('/login')

    } catch (error) {
      console.log(error)
      toast.error(error.data.message)
      
    }

  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign Up to continue</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-4 shadow-2xl rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-balance">Username </label>
              <div className="mt-2">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Username'
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="p-3 block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="p-3 block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Register</button>
            </div>
          </form>
          <p className='my-3 text-center'>
            <i>Already have an account? <Link className='underline text-red-500' to={"/login"}>Login</Link> </i>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register