import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = () => {
    const [error, setError] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const stripe = useStripe()
    const {user} = useAuth()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [cart] = useCart()
    const totalPrice = cart?.reduce((total, item)=> total+item.price,0)
    const parseFloatPrice = parseFloat(totalPrice)
    
    useEffect(()=>{
       if(parseFloatPrice>0){
        axiosSecure.post("/create-payment-intent", {price: parseFloatPrice})
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
       }
    },[axiosSecure, parseFloatPrice])


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
            setTransactionId(null)
        } else{
           
            setError(" ")
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email,
                }
            }
        })

        if(confirmError){
            console.log(confirmError)
            setTransactionId(null)
        } else{
            if(paymentIntent.status === "succeeded"){
                setTransactionId(paymentIntent.id)
            }
         
        }

        // save payment details in the database
        const payment = {
            name: user?.name,
            email: user?.email,
            transactionId,
            date: new Date(),
            price: parseFloatPrice,
            cartIds: cart.map(item=> item._id),
            menuIds: cart.map(item=> item.menuId)
        }

        const res = await axiosSecure.post("/payments", payment)
        console.log(res.data)


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
          <button className="btn w-full bg-[#D1A054]" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
          </div>
          <p className="text-red-600 font-semibold">{error}</p>
          {transactionId ? <p className="text-green-600 font-semibold">Your transaction id: ${transactionId}</p>: ' '}
        </form>
    )}
export default CheckoutForm;