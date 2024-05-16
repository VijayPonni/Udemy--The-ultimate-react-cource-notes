import "./styles.css";
import AccordionItem from "./AccordionItem";
import { useState } from 'react'

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={ faqs} />
    </div>
  );
}

function Accordion({ data }) {

  const [selection , setSelection ] = useState(null);
 
  return <div className="accordion">
    {
      data.map((item, index) => (
        <AccordionItem
          num={index}
          title={item.title}
          key={index}
          selection={selection}
          onSelect={ setSelection}
        >{ item.text}</AccordionItem>
      ))
    }

<AccordionItem
          num={ 5}
          title="Test"
          key="TEST 6"
          selection={selection}
          onSelect={ setSelection}
        ><p> I am just a TEST 😆</p></AccordionItem>

  </div>;
}
