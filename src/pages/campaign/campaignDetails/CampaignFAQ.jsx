import React from "react";
import { useState } from "react";

const CampaignFAQ = ({faqs,campaign}) => {
  const [faqQuestionAndAnswer, setFaqQuestionAndAnswer] = useState(campaign?.campaignFaqs)
  const [faqItems, setFaqItems] = useState(faqQuestionAndAnswer);
  const handleToggle = (itemId) => {
    const updatedItems = faqItems?.map((item) => {
      if (item.id === itemId) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setFaqItems(updatedItems);
  };

  const listQuestionAnswer = faqItems?.map((item) => {
    return (
      <div>
        <div>
          <div key={item.id}>
            <div
              onClick={() => handleToggle(item.id)}
              className={` cursor-pointer  ${
                item.isOpen ? " shadow-lg" : ""
              } flex justify-between bg-white my-2 py-2.5 px-7 rounded-md`}
            >
              <div className=" font-semibold text-btn text-[#091E42]">
                {" "}
                {item.question}
              </div>
              <button className="text-black text-lg font-bold" >
                {item.isOpen ? "-" : "+"}
              </button>
            </div>
            {item.isOpen && (
              <div className="text-subtxt font-semibold mb-6 text-[#091E42]  pl-7 pr-10 py-2">
                <p className="leading-tight">{item && item.answer ? item.answer :item.answer}</p>
                {/* <p className="mt-4 leading-tight">{item.answer2}</p>
                <p className="mt-4 leading-tight">{item.answer3}</p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className=" rounded-md mb-6 py-6  bg-[#F5F6F7]">
        <div className="text-xl font-bold pl-[74px] mb-5">
          <p className="">
            FAQs
          </p>
        </div>
        {listQuestionAnswer?.length>0?
        <div className="pl-[5.9%] pr-[4.8%]  ">{listQuestionAnswer} </div>
        :
        <div className="flex justify-center text-xl font-bold"> No FAQs</div>
        }
      </div>
    </div>
  );
}

export default CampaignFAQ

// import { useDispatch, useSelector } from 'react-redux'

// const CampaignFAQ = ({ investor, investors: users }) => {

//   const dispatch = useDispatch();


//   return (
//     <>
//       <div className='flex flex-col sm:flex-row w-full gap-6'>

//         <div className='w-full flex flex-col gap-5'>

//           <div className="w-full">
//             <div className="font-bold text-xl mr-2 my-4 whitespace-nowrap">FAQ</div>

            
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }



// export default CampaignFAQ