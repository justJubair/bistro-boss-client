import CoverPage from "../../../Shared/CoverPage/CoverPage";
import MenuTemplate from "../../../Shared/MenuTemplate/MenuTemplate";
import Navbar from "../../../Shared/Navbar/Navbar";
import useMenus from "../../../hooks/useMenus";
import ourMenuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
const OurMenu = () => {
  const menus = useMenus();
  const todaysOffers = menus.filter((menu) => menu.category === "offered");
  const desserts = menus.filter((menu) => menu.category === "dessert");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const salads = menus.filter((menu) => menus.category === "salad");
  const soups = menus.filter((menu) => menus.category === "soup");

  return (
    <div>
      <Navbar />
      <CoverPage
        img={ourMenuImg}
        title="our menu"
        subTitle="would you like to try a dish?"
        textSize="text-6xl"
        height="600px"
      />
      <MenuTemplate
        buttonText="ORDER YOUR FAVOURITE FOOD"
        menus={todaysOffers}
        heading="today's offer"
        subHeading="Don't miss"
      />
      <CoverPage img={dessertImg} title="desserts" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      textSize="text-4xl"
      height="500px"/>
    </div>
  );
};
export default OurMenu;
