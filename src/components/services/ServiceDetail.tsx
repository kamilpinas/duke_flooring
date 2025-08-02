
import React from 'react';

interface ServiceDetailProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  reverse?: boolean; // To alternate layout
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  benefits,
  imageUrl,
  reverse = false,
}) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}
      >
        <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <h3 className="text-3xl font-bold text-charcoal-gray">{title}</h3>
          <p className="mt-4 text-lg leading-relaxed font-serif text-charcoal-gray">
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-forest-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="font-semibold text-charcoal-gray">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
