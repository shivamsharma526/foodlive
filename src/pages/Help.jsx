import {React, useState} from 'react'
import { WiStars } from "react-icons/wi";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Help = () => {
  const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely. You can upgrade or downgrade anytime from your dashboard."
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer a full refund within the first 14 days of purchase, no questions asked."
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, we support adding extra billing info like VAT ID, address, etc."
  }
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
//     <div className='w-full h-screen' style={{ backgroundColor:" white", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 2px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 2px, transparent 1px)" ,backgroundSize:"100px 100px", padding:" 10rem 5rem"}}>

//     </div>
<>
<div className="min-h-screen bg-white px-4 py-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className="max-w-2xl mx-auto">
 <p className='flex justify-center md:text-6xl'><WiStars/></p>

 <h1 className='md:text-5xl capitalize text-center font-bold'>frequently asked question</h1>
 <p className='md:text-2xl text-center tracking-tighter mt-5'>these are the most commonly asked question about untitled ui billing.<br className='md:block hidden'/> can't find what your're looking for? </p>
   

        <div className="space-y-4 mt-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className=" rounded-xl p-4 bg-white shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="md:font-semibold md:text-lg">{faq.question}</h3>
                {activeIndex === index ?  <FaChevronUp /> : <FaChevronDown />}
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    className="text-gray-600 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
  )
}

export default Help