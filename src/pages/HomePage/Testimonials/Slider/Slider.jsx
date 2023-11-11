import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css"
import Rating from "react-rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types"
const Slider = ({ reviews }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews?.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="flex flex-col items-center w-9/12 space-y-4">
            <Rating   initialRating={review.rating}
             emptySymbol={<AiOutlineHeart className="text-[#D99904]" size={25}/>}
             fullSymbol={<AiFillHeart className="text-[#D99904]"  size={25}/>}
            readonly
            ></Rating>
           <FaQuoteLeft size={50}/>
            <p className="text-sm">{review.details}</p>
            <h2 className="text-xl uppercase font-medium text-[#D99904]">{review.name}</h2>
          </div>
        </SwiperSlide>
      ))}
     
    </Swiper>
  );
};

Slider.propTypes={
    reviews:PropTypes.array,
}
export default Slider;

