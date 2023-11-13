import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])

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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
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