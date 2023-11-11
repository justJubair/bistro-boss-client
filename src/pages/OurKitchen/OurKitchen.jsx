import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CoverPage from "../../Shared/CoverPage/CoverPage";
import ourKitchenImg from "../../assets/shop/banner2.jpg"
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
const OurKitchen = () => {
    const [tabIndex, setTabIndex] = useState(0)
    console.log(tabIndex)
    return(
        <div>
            <CoverPage img={ourKitchenImg} title="our kitchen" subTitle="Would you like to try a dish?" height="600px"/>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="text-center my-10">
        <Tab>Salads</Tab>
        <Tab>Pizzas</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
        </div>
    )}
export default OurKitchen;