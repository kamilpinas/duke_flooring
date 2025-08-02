export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How long will my flooring installation take?",
    answer: "Most standard projects in a few rooms are completed within 2-4 days. The exact timeline depends on the size of the area, the type of flooring, and any necessary subfloor preparation. We provide a precise timeline with your free estimate."
  },
  {
    id: 2,
    question: "Will my house be a mess during the installation?",
    answer: "We treat your home with the utmost respect. Our team is committed to maintaining a clean and organized workspace. We use dust-containment systems where possible and perform a thorough cleanup at the end of each day and upon project completion."
  },
  {
    id: 3,
    question: "Do I need to move my own furniture?",
    answer: "We offer furniture moving services as part of our full-service installation package. We can discuss the specifics during your consultation to ensure a completely hassle-free experience for you."
  },
  {
    id: 4,
    question: "What areas do you serve?",
    answer: "Our primary service area is Volo and the surrounding communities in Lake County, Illinois. If you're unsure if you're in our service area, please don't hesitate to reach out and ask!"
  },
  {
    id: 5,
    question: "What kind of warranty do you offer on your work?",
    answer: "We stand behind our craftsmanship with a comprehensive installation warranty, in addition to the manufacturer's warranty on all the materials we use. We'll provide you with all the details in writing."
  },
  {
    id: 6,
    question: "Is the estimate really free with no obligation?",
    answer: "Absolutely. Our estimate is 100% free and comes with no strings attached. It's an opportunity for us to understand your needs and for you to understand the costs and process, completely pressure-free."
  }
];
