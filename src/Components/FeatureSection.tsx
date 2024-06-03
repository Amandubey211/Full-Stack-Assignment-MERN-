import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">Instant PDF</h2>
        <p className="text-gray-600">Generate invoices quickly.</p>
      </div>
      <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">Track Payments</h2>
        <p className="text-gray-600">Monitor your transactions.</p>
      </div>
      <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">Manage Clients</h2>
        <p className="text-gray-600">Keep client information organized.</p>
      </div>
    </section>
  );
};

export default FeatureSection;
