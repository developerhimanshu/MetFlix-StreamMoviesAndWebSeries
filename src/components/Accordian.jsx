import React, { useContext } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { useState } from "react";
import faqsarr from "../fixtures/faqs.json";
import { Link, useNavigate } from "react-router-dom";
const Accordian = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (activeIndex === index) setActiveIndex(null);
    else setActiveIndex(index);
  };
  const accordianHtml = faqsarr.map((i, index) => (
    <div className="accord" key={i.id}>
      <button
        className="accordian-button"
        onClick={() => toggleQuestion(index)}
      >
        <p>{i.header}</p>
        {activeIndex === index ? (
          <BsX className="plus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </button>
      {activeIndex == index && (
        <p className="accordian-body animate">{i.body}</p>
      )}
    </div>
  ));

  return (
    <div className="accordian">
      <h1>Frequnetly Asked Questions</h1>
      {accordianHtml}
      <h2>
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className="input-submit">
        <input type="email" placeholder="Email address" required />
        <Link
          to="/login"
          className="bg-[#E50914] flex items-center h-[60px] justify-center px-2"
        >
          <p className="p-0 m-0 bg-[#E50914]"> Get Started </p>
          {<AiOutlineRight className="icon" />}
        </Link>
      </div>
    </div>
  );
};

export default Accordian;
