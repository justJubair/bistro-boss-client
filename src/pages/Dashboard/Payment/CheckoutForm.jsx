import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxios from "../../../hooks/useAxios";

const CheckoutForm = () => {
    const [error, setError] = useState("")
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState(" ")
    const [cart] = useCart()
    const totalPrice = cart?.reduce((total, item)=> total+item.price,0)
    
    useEffect(()=>{
        axiosSecure.post("/create-payment-intent", {price: totalPrice})
        .then(res=>{
            console.log(res.data)
        })
    },[axiosSecure, totalPrice])


    const handleSubmit = async e=>{
        e.preventDefault()

        if(!stripe || !elements){
            return
        }
        const card =  elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if(error){
            console.log(error)
            setError(error.message)
        } else{
            console.log(paymentMethod)
            setError(" ")
        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            '::placeholder': {
                                color: '#aab7c4',
                              },
                        },
                        invalid: {
                            color: "#9e2146"
                        }
                    }
                }}
            />
          <div className="text-center my-6">
          <button className="btn w-full bg-[#D1A054]" type="submit" disabled={!stripe}>Pay</button>
          </div>
          <p className="text-red-600 font-semibold">{error}</p>
        </form>
    )}
export default CheckoutForm;