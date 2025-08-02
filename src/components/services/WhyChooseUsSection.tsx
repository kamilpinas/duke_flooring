
import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-charcoal-gray">
          The Duke Flooring Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-off-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">Quality Materials</h3>
            <p className="text-lg font-serif text-charcoal-gray">
              We source only premium-grade materials from trusted manufacturers to ensure your floor is beautiful and built to last.
            </p>
          </div>
          <div className="p-6 bg-off-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">Clean & Respectful</h3>
            <p className="text-lg font-serif text-charcoal-gray">
              Your home is your sanctuary. Our team is meticulous about maintaining a clean work site and respecting your space at all times.
            </p>
          </div>
          <div className="p-6 bg-off-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">Local Volo Expertise</h3>
            <p className="text-lg font-serif text-charcoal-gray">
              We understand the homes and styles of Lake County. We're your local, dedicated flooring partners from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
