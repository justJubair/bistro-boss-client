import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const {loginUser} = useAuth()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data)=>{
    const {email, password} = data;
    loginUser(email, password)
    .then(()=>{
      toast.success("Logged in successfully")
      navigate("/")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }

  const handleCaptcha = (e)=>{
    const userCaptcha = e.target.value
    if(validateCaptcha(userCaptcha)){
     
      setIsButtonDisabled(false)
    } else {
    
      setIsButtonDisabled(true)
    }
  }
    return(
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email", {required:true})} className="input input-bordered"  />
          {errors.email && <span className="mt-2 font-medium text-red-600">Email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", {required:true})} placeholder="password" className="input input-bordered"  />
          {errors.password && <span className="mt-2 font-medium text-red-600">Password field is required</span>}
        </div>
        <div className="form-control mt-4">
        <LoadCanvasTemplate/>
        <input onBlur={handleCaptcha} name="captcha" className="input input-bordered" type="text" placeholder="type the captcha above" />
        </div>
        <div className="form-control mt-6">
          <button disabled={isButtonDisabled} className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="flex items-center justify-between px-4 pb-2">
        <p>New to bistro boss?</p>
        <Link to="/register" className="btn btn-link">Register now</Link>
      </div>
    </div>
  </div>
</div>
    )}
export default Login;