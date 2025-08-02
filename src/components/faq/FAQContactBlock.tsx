import React from 'react';
import { Link } from 'react-router-dom';

const FAQContactBlock: React.FC = () => {
  return (
    <section className="bg-off-white pb-20">
        <div className="container mx-auto px-4">
            <div className="bg-warm-taupe rounded-lg p-12 text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-charcoal-gray">Still Have a Question?</h3>
                <p className="mt-4 max-w-xl mx-auto text-charcoal-gray font-serif">
                We're happy to help. Reach out to us directly, and our team will get back to you as soon as possible.
                </p>
                <Link
                to="/contact"
                className="mt-8 inline-block bg-forest-green text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                Contact Us
                </Link>
            </div>
        </div>
    </section>
  );
};

export default FAQContactBlock;
