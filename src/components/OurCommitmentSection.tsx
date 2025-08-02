import React from 'react';

const OurCommitmentSection: React.FC = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-charcoal-gray mb-4 font-sans">Our Commitment to You</h2>
          <p className="text-lg font-serif text-charcoal-gray mb-8">
            Your home is your sanctuary, and we treat it with the respect it deserves. From the initial consultation to the final walkthrough, we promise clear communication, meticulous craftsmanship, and a final result you'll love for years to come. That's the Duke Flooring guarantee.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
                <div className="flex justify-center items-center mb-4">
                    <svg className="w-12 h-12 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-4l-6.5 6.5-3-3"></path></svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray">Quality Materials</h3>
            </div>
            <div className="p-6">
                <div className="flex justify-center items-center mb-4">
                    <svg className="w-12 h-12 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray">Clean & Respectful</h3>
            </div>
            <div className="p-6">
                <div className="flex justify-center items-center mb-4">
                    <svg className="w-12 h-12 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray">Satisfaction Guaranteed</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentSection;
