import React from 'react';

const SafetyInformation = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-310 mx-auto">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <span className="text-gray-600">
            <i className="fas fa-info-circle"></i> {/* Info icon */}
          </span>
          <span>Disclosures and important safety information</span>
        </h2>
        <div>
          <hr className="border-t border-gray-300 mb-6 w-250" />
        </div>
        
        {/* Content */}
        <div className="text-gray-700">
          <h3 className="text-lg font-medium text-gray-800">Important safety information</h3>
          <p className="mt-2">
            For product intended use and/or indications for use, risks, cautions, and warnings and full
            prescribing information, refer to the associated user manual(s) or visit{' '}
            <a
              href="https://manuals.intuitivesurgical.com/market"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              manuals.intuitivesurgical.com/market
            </a>. For summary of the risks associated with surgery and bronchoscopy refer to{' '}
            <a
              href="https://www.intuitive.com/safety"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.intuitive.com/safety
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetyInformation;
