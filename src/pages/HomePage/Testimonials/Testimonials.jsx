import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Slider from "./Slider/Slider";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch("review.json")
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return(
        <div className="max-w-screen-xl mx-auto px-4">
            <SectionTitle heading="testimonials" subHeading="What Our Clients Say"/>
            <Slider reviews={reviews}/>
        </div>
    )}
export default Testimonials;