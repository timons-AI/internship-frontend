import { useState } from 'react';
import {SlArrowDown, SlArrowUp} from 'react-icons/sl';
function FAQ() {
  const [faqItems, setFaqItems] = useState([

    { question: 'What is this website for? ', answer: 'Simple collection of companies that offer internship with different regions and professions , This should help you narrow down your search as you look for internship', isExpanded: false },
    { question: ' Can I search for internship places without specifying a region or profession?', answer: ' Yes, you can select "All" in both the region and profession drop-down menus to search for internship places across all regions and professions.', isExpanded: false },
    { question: ' How frequently is the website updated with new internship listings?', answer: 'The website is updated regularly with new internship listings. However, we cannot guarantee that every internship listing is up-to-date or still available', isExpanded: false },
    { question: 'How can I search for internship places?', answer: 'To search for internship places, select your preferred region and profession from the drop-down menus and click the "Search" button. The website will display a list of internship places that match your criteria.', isExpanded: false },
    { question: 'Do we have listings for different countries other than Uganda?', answer: 'No, but we are constantly adding new listings and would be grateful to any contributors to provide us with companies and places both local and international ', isExpanded: false },
    { question: 'Who are we?', answer: ' We are a team of second-year students who understand the challenges of finding internships, so we decided to create a platform to make the process a bit easier for everyone.', isExpanded: false },
    { question: 'Is it Free', answer: 'yes', isExpanded: false },
  ]);

  const toggleItem = (index) => {
    const newFaqItems = [...faqItems];
    newFaqItems[index].isExpanded = !newFaqItems[index].isExpanded;
    setFaqItems(newFaqItems);
  };

  return (
    <div className=' bg-slate-500  rounded-md m-2 p-1 w-full md:w-1/2 '>
      {faqItems.map((item, index) => (
        <div className=' bg-slate-100 text-black  m-2 p-2 rounded-md' key={index}>
          <div
            onClick={() => toggleItem(index)}
            className="flex items-center justify-between py-2 cursor-pointer"
          >
            <p className="text-lg font-medium">{item.question}</p>
            <div>{item.isExpanded ? <SlArrowUp className=' bg-slate-300 rounded-lg w-9 h-9 p-2 text-black'  /> : <SlArrowDown className=' bg-slate-300 rounded-lg w-9 h-9 p-2 text-black'  />}</div>
          </div>
          {item.isExpanded && (
            <div className=' bg-slate-300 text-black rounded-md p-2'>
              <p className="py-2">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;