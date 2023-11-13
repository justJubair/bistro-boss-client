import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Register = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
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
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"  {...register("name", {required:true})} className="input input-bordered"  />
                {errors.name && <span className="mt-2 font-medium text-red-600">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" {...register("photo")} placeholder="https://img.png"
               className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"  {...register("email")} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password",{required: true, minLength:6, pattern: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*\d).+$/})} placeholder="password" className="input input-bordered"  />
                {errors.password?.type === "required" && <span className="mt-2 font-medium text-red-600">Password is required</span>}
                {errors.password?.type === "minLength" && <span className="mt-2 font-medium text-red-600">Password must be six characters or longer</span>}
                {errors.password?.type === "pattern" && <span className="mt-2 font-medium text-red-600">Password must have atleast one capital letter & a special character</span>}
              </div>
              <div className="form-control mt-4">
        <LoadCanvasTemplate/>
        <input onBlur={handleCaptcha} name="captcha" className="input input-bordered" type="text" placeholder="type the captcha above" />
        </div>
        <div className="form-control mt-6">
          <button disabled={isButtonDisabled} className="btn btn-primary">Register</button>
        </div>
            </form>
            <div className="flex items-center justify-between px-4 pb-2">
              <p>Already have an account?</p>
              <Link to="/login" className="btn btn-link">login now</Link>
            </div>
          </div>
        </div>
      </div>
    )}
export default Register;