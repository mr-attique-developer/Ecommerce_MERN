import React from 'react';
import deals from "../../assets/deals.png";
import { RiTruckLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RiUserVoiceFill } from "react-icons/ri";




const Deals = () => {
  const days = [
    {
      id: 1,
      number: 14,
      title: "Days",
    },
    {
      id: 2,
      number: 20,
      title: "Hours",
    },
    {
      id: 3,
      number: 15,
      title: "Minutes",
    },
    {
      id: 4,
      number: "05",
      title: "Second",
    },
  ];

  const Promodata = [
    {
      id: 1,
      icon: RiTruckLine,
      title:"Free Delivery",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      icon: HiOutlineCurrencyDollar,
      title:"100% Money Back Guarantee",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      icon: RiUserVoiceFill,
      title:"Strong Support",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ]

  return (
    <>
      <div className="text-center text-xl font-bold my-4">Deals</div>
      <div className="max-w-4xl mx-auto bg-red-200 dark:bg-slate-500  flex flex-col sm:flex-row justify-between items-center mb-8 p-4 sm:p-8 rounded-md">
        <div className="   mb-4 sm:mb-0">
          <img src={deals}  className=" rounded-lg " alt="deals" />
        </div>
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start ms-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Get Up to 20% Discount</h2>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Deal Of This Month</h1>
          <p className="text-sm sm:text-base mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate ex rem, dolores, voluptatibus corrupti quam ipsa eaque deleniti laboriosam velit, voluptatem nam?
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
            {days.map((day) => (
              <div key={day.id} className="flex flex-col items-center bg-white dark:bg-black p-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md">
                <h1 className="text-xl sm:text-2xl font-bold">{day.number}</h1>
                <h1 className="text-xs sm:text-sm">{day.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Promo Data  */}
<div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
  {
    Promodata.map((item) => (
      <div key={item.id} className="flex flex-col items-center p-4 rounded-md">
        <item.icon size={30} className="text-red-600 dark:text-red-400" />
        <h1 className="text-lg font-semibold mt-2">{item.title}</h1>
        <p className="text-sm text-center mt-2">{item.description}</p>
      </div>
    ))
  }
</div>
    </>
  );
};

export default Deals;