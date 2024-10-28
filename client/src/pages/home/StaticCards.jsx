import React from 'react'
import card1 from "../../assets/card-1.png"
import card2 from "../../assets/card-2.png"
import card3 from "../../assets/card-3.png"
const StaticCards = () => {
    const staticCards = [
        {
            id: 1,
            title: "Women T-Shirt",
            image: card1,
            trend: "2024 Trend",
        },
        {
            id: 2,
            title: "Women Dresses",
            image: card2,
            trend: "2024 Trend",
        },
        {
            id: 3,
            title: "Women Casual",
            image: card3,
            trend: "2024 Trend",
        },
    ]
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-3   gap-4 max-w-4xl mx-auto  rounded-md mt-16  h-auto'>
                {
                    staticCards?.map((card) => (
                        <div key={card.id} className=' sm:max-w-96 w-[100%] relative shadow-2xl '>
                           
                                <img src={card.image} alt={card.title} />
                                <div className='absolute  top-10 right-3 z-16'>

                                    <h3 className='text-lg text-black font-extrabold md:text-xl'>{card.title}</h3>
                                    <p className='text-sm text-black md:text-md'>{card.trend}</p>
                                </div>

                                
                            
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default StaticCards