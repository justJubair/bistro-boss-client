import { loadStripe } from "@stripe/stripe-js";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)
const Payment = () => {
    return(
        <>
        <Container>
            <SectionTitle heading="payment" subHeading="Please pay your due"/>
          <div className="mt-28">
          <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
          </div>
            </Container>
        </>
    )}
export default Payment;