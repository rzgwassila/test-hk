import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/faq.css";

const faqs = [
  {
    question: "What is DataHack event?",
    answer:
      "DataHack 2025 is a 3-day datathon where teams tackle real-world challenges using AI and data science to develop innovative solutions and compete for top prizes.",
  },
  {
    question: "Who can participate in DataHack?",
    answer:
      "Students, professionals, and AI enthusiasts with a passion for problem-solving and innovation are welcome!",
  },
  {
    question: "How does the competition work?",
    answer:
      "Teams receive challenges, analyze data, develop AI models, and present their solutions to judges.",
  },
  {
    question: "Where and when is the event held?",
    answer:
      "The event will be held in ... from ... . More details will be shared soon!",
  },
  {
    question: "Are there workshops and mentoring?",
    answer:
      "Yes! Experts from the industry will provide mentorship and guide participants throughout the competition.",
  },
  {
    question: "What prizes and opportunities are available?",
    answer:
      "Winners receive cash prizes, networking opportunities, and potential job offers from sponsors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-box">
        <h2 className="faq-title">FAQ</h2>
        <p className="faq-subtitle">// Questions</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button onClick={() => toggleFAQ(index)} className="faq-question">
                <span>
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="faq-icon" />
                ) : (
                  <FaPlus className="faq-icon" />
                )}
              </button>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
