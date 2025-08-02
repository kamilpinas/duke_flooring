import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA: React.FC = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-charcoal-gray">
          Let's Build Something Beautiful Together
        </h2>
        <p className="text-xl font-serif max-w-2xl mx-auto mb-8 text-charcoal-gray">
          Now that you know our story, we'd love to hear yours. Let's discuss your vision for your home.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          Start the Conversation
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
