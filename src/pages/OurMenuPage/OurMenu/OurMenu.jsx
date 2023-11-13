import CoverPage from "../../../Shared/CoverPage/CoverPage";
import MenuTemplate from "../../../Shared/MenuTemplate/MenuTemplate";
import useMenus from "../../../hooks/useMenus";
import ourMenuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const OurMenu = () => {
  const menus = useMenus();
  const todaysOffers = menus.filter((menu) => menu.category === "offered");
  const desserts = menus.filter((menu) => menu.category === "dessert");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const salads = menus.filter((menu) => menu.category === "salad");
  const soups = menus.filter((menu) => menu.category === "soup");

  return (
    <div>
      {/* todays offer */}
      <CoverPage
        img={ourMenuImg}
        title="our menu"
        subTitle="would you like to try a dish?"
        textSize="text-6xl"
        height="600px"
      />
      <MenuTemplate
        menus={todaysOffers}
        heading="today's offer"
        subHeading="Don't miss"
        title="salad"
      />
      {/* dessers menus */}
      <CoverPage
        img={dessertImg}
        title="desserts"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuTemplate menus={desserts} title="dessert" marginTop="mt-16" />
      {/* pizza menus */}
      <CoverPage
        img={pizzaImg}
        title="pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuTemplate menus={pizzas} title="pizza" marginTop="mt-16" />
      {/* sald */}
      <CoverPage
        img={saladImg}
        title="salads"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuTemplate menus={salads} title="salad" marginTop="mt-16"/>
      {/* soup */}
      <CoverPage
        img={soupImg}
        title="soups"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuTemplate menus={soups} title="soup" marginTop="mt-16" />
    </div>
  );
};
export default OurMenu;
