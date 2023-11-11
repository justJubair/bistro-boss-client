import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const FeaturedMenu = () => {
  return (
    <div className="px-4 lg:px-28 pt-4  bg-black/60 bg-blend-overlay bg-center h-[750px] md:h-[500px] lg:h-screen bg-fixed bg-cover bg-[url('https://i.ibb.co/RjSkkx8/featured.jpg')]">
      <SectionTitle
        textColor="white"
        subHeading="check it out"
        heading="from our menu"
      />
      <div className="flex flex-col mt-10 items-center gap-10 md:flex-row">
        <img
          className="w-full md:w-[350px]  lg:w-[500px]"
          src={featuredImg}
          alt="featured recipe"
        />
        <div className="space-y-2 text-white">
          <p>March 20, 2023</p>
          <p>where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aut.
            Sint consectetur eum quaerat, atque ea quisquam voluptatem
            voluptatibus fuga.
          </p>
          <button className="btn text-white btn-outline border-x-0 border-t-0 border-b-4 hover:bg-[#D99904]">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeaturedMenu;
