import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const usePaymentHistory = (user)=>{
    const axios = useAxios()
    const { data: payments = [] } = useQuery({
      queryKey: [user?.email, "paymentHistory"],
      queryFn: async () => {
        if(user){
          const res = await axios.get(`/payments?email=${user?.email}`);
          return res.data
        } else {
          const res = await axios.get("/payments");
          return res.data
        }
       
      },
    });
    console.log(payments)
    return [payments]
}

export default usePaymentHistory