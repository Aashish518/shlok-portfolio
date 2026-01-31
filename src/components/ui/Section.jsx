import React from 'react';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
