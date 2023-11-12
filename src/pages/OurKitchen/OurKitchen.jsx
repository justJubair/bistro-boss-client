import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CoverPage from "../../Shared/CoverPage/CoverPage";
import ourKitchenImg from "../../assets/shop/banner2.jpg";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import Container from "../../Shared/Container/Container";
import { useParams } from "react-router-dom";
const OurKitchen = () => {
  const axios = useAxios();
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {selectedCategory} = useParams()
  const initialIndex = categories.indexOf(selectedCategory)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [category, setCategory] = useState("salad");
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get(`/menus?category=${category}`).then((data) => {
      setMenus(data.data);
    });
  }, [axios, category]);
  const handleCategory = (e) => {
    const selectedCategory = e.target.textContent;
    if (selectedCategory === "Salads") {
      setCategory("salad");
    } else if (selectedCategory === "Pizzas") {
      setCategory("pizza");
    } else if (selectedCategory === "Soups") {
      setCategory("soup");
    } else if (selectedCategory === "Desserts") {
      setCategory("dessert");
    } else if (selectedCategory === "Drinks") {
      setCategory("drinks");
    }
  };
  return (
    <div>
      <CoverPage
        img={ourKitchenImg}
        title="our kitchen"
        subTitle="Would you like to try a dish?"
        height="600px"
      />

     <Container>
     <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList onClick={handleCategory} className="text-center my-10">
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        {Array(5)
          .fill(0)
          .map((item, idx) => (
            <TabPanel key={idx}>
        
            <div className="grid gap-4  grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
             {menus?.map((menu) => (
                <FoodCard key={menu._id} menu={menu} />
              ))}
             </div>
           
            </TabPanel>
          ))}
      </Tabs>
     </Container>
    </div>
  );
};
export default OurKitchen;
