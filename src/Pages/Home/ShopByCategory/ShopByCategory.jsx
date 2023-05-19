import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [toysData, setToysData] = useState([]);

  const toysTab = [
    { id: 1, name: "Marvel" },
    { id: 2, name: "Avengers" },
    { id: 3, name: "Transformers" },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        if (activeTab === 0) {
          const marvelData = data.filter(
            (toyData) => toyData.subCategory === "Marvel"
          );
          setToysData(marvelData);

        } 
        else if (activeTab === 1) {
          const avengersData = data.filter(
            (toyData) => toyData.subCategory === "Avengers"
          );
          setToysData(avengersData);
        } 
        else {
          const transformersData = data.filter(
            (toyData) => toyData.subCategory === "Transformers"
          );
          setToysData(transformersData);
        }
      });
  }, [activeTab]);

  return (
    <div className="mb-32 p-2">
      <div className="text-center space-y-5 mb-16">
        <h1 className="text-center font-extrabold text-5xl">
          Explore our Photo Gallery
          <span className="text-[#FFBB00] font-extrabold">.</span>
        </h1>
        <p className="md:w-1/2 mx-auto text-gray-600">
          Ignite your imagination in our enchanting Toy Photo Gallery. Step into
          a world where toys come alive, embarking on whimsical adventures.
        </p>
      </div>
      <Tabs
        selectedIndex={activeTab}
        onSelect={(index) => setActiveTab(index)}
        className="shadow-md bg-white rounded-lg w-full"
      >
        <TabList className="flex border-b border-gray-200 ">
          {toysTab.map((toy, index) => (
            <Tab
              key={toy._id}
              className={`py-4 px-6 ${
                index === activeTab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-black hover:text-white"
              }`}
            >
              {toy.name}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mt-5">
            {toysData.slice(0, 3).map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mt-5">
            {toysData.slice(0, 3).map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mt-5">
            {toysData.slice(0, 3).map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
