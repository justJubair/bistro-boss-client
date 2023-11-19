import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

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
        } else{
            console.log(paymentMethod)
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
        </form>
    )}
export default CheckoutForm;