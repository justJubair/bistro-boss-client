import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
const SocialLogin = () => {
    const navigate = useNavigate()
    const axios = useAxios()
    const {loginGoogle} = useAuth()
    const handleGoogleLogin= ()=>{
        loginGoogle()
        .then(result=>{
            if(result.user){
                const name = result?.user?.displayName
                const email = result?.user?.email
                const userInfo = {name, email}
                axios.post("/users", userInfo)
                .then()
                toast.success("Logged in successfully")
                navigate("/")
            }

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