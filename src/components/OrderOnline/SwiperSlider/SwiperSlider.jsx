import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
// import slide images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";

const SwiperSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <img src={slide1} />
        {/* overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
        <h3
          style={{ fontFamily: "Cinzel" }}
          className="absolute shadow-2xl uppercase text-white left-28 text-xl top-72"
        >
          Salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} />
        {/* overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
        <h3
          style={{ fontFamily: "Cinzel" }}
          className="absolute shadow-2xl uppercase text-white left-28 text-xl top-72"
        >
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} />
        {/* overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
        <h3
          style={{ fontFamily: "Cinzel" }}
          className="absolute shadow-2xl uppercase text-white left-28 text-xl top-72"
        >
          Soup
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} />
        {/* overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
        <h3
          style={{ fontFamily: "Cinzel" }}
          className="absolute shadow-2xl uppercase text-white left-28 text-xl top-72"
        >
          Dessert
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperSlider;
