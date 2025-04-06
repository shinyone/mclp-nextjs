import React, { useState } from 'react';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  parentId: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-700 rounded mb-2">
      <h2 className="bg-gray-800 text-white p-3 cursor-pointer" onClick={toggleAccordion}>
        {question}
      </h2>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen p-3' : 'max-h-0'
        } bg-gray-900 text-gray-300`}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionItem;