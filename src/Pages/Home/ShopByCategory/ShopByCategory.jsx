import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toyCards = [
    { id: 1, name: "Toy 1", description: "Description 1" },
    { id: 2, name: "Toy 2", description: "Description 2" },
    // Add more toy cards as needed
  ];

  return (
    <div className="mb-32">
      <Tabs
        selectedIndex={activeTab}
        onSelect={(index) => setActiveTab(index)}
        className="shadow-md bg-white rounded-lg"
      >
        <TabList className="flex border-b border-gray-200">
          {toyCards.map((toy, index) => (
            <Tab
              key={toy.id}
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

        {toyCards.map((toy, index) => (
          <TabPanel key={toy.id} className="p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
              <p className="text-gray-600">{toy.description}</p>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
