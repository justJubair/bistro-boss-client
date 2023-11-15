import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const navigate = useNavigate()
    const {loginGoogle} = useAuth()
    const handleGoogleLogin= ()=>{
        loginGoogle()
        .then(result=>{
            if(result)
            toast.success("Logged in successfully")
            navigate("/")
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return(
        <div>
            <div className="divider"></div>
          <div className="text-center my-4">
          <button onClick={handleGoogleLogin} className="btn">
           <FcGoogle size={25}/>
             
           </button>
          </div>
        </div>
    )}
export default SocialLogin;