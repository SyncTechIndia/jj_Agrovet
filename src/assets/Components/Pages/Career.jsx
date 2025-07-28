import React from "react";

const positions = [
  {
    title: "Branch Manager – Contract Broiler Farming",
    responsibilities: [
      "Manage end-to-end operations of contract broiler farming in the assigned region",
      "Recruit and onboard new poultry farmers into the contract farming model",
      "Coordinate chick placement, feed distribution, and medicine supply",
      "Monitor flock performance, mortality, FCR, and farm hygiene",
      "Lead a team of supervisors, technical assistants, and veterinary staff",
      "Ensure farmer satisfaction and timely settlement of payments",
      "Report daily data on placement, weight gain, and bird health",
      "Handle logistics, grower contracts (GC), and maintain compliance",
    ],
    requirements: [
      "Graduate in Agriculture / Animal Science / Veterinary / Poultry Science preferred",
      "Minimum 3–5 years of experience in poultry contract farming",
      "Strong communication and leadership skills",
      "Knowledge of farm management, chick placement, and broiler production cycle",
      "Willing to travel and manage multiple farms in rural/semi-urban areas",
      "Basic computer knowledge for reporting and MIS",
    ],
    offerTitle: "💼 What We Offer:",
    offers: [
      "Competitive salary with performance incentives",
      "Travel and mobile allowance",
      "Supportive work environment and career growth opportunities",
      "Chance to work with one of India's trusted agro-poultry brands",
      "Empowerment to drive rural employment and farmer income growth",
    ],
  },
  {
    title: "Accountant",
    responsibilities: [
      "Maintain accurate day-to-day accounting (Sales, Purchase, Journal, Bank, Cash)",
      "Handle GST filings, TDS compliance, and bank reconciliations",
      "Monitor branch-wise inventory and expense tracking through POLOXY",
      "Prepare MIS reports and coordinate with departments for accurate entries",
      "Assist with payroll processing and statutory documentation",
      "Ensure timely closing of books and support internal audits",
      "Operate company's POLOXY poultry ERP software for entries and reporting",
    ],
    requirements: [
      "B. Com / M. Com / CA Inter (preferred)",
      "Minimum 2–3 years of accounting experience",
      "Strong command over Excel, and POLOXY software",
      "Familiar with poultry operations accounting (feed, flock, placement costs, etc.)",
      "Detail-oriented with good organizational and communication skills",
    ],
    offerTitle: "💰 Salary & Benefits:",
    offers: [
      "Salary: Based on experience and skillset",
      "Mobile allowance + Travel (if applicable)",
      "Training on advanced POLOXY modules (if needed)",
      "Growth opportunity in a structured and fast-growing company",
    ],
  },
  {
    title: "Line Supervisor",
    responsibilities: [
      "Daily visits to contract broiler farms in assigned area",
      "Monitor bird health, mortality, feed consumption, and FCR",
      "Ensure biosecurity protocols and farm management standards are followed",
      "Maintain records of placement, vaccinations, medications, and bird weights",
      "Coordinate chick delivery, feed supply, and medicine distribution",
      "Report daily updates to the Branch Manager",
      "Build relationships with farmers and guide them for better performance",
    ],
    requirements: [
      "Minimum Qualification: 10+2 or Graduate (preferred: Animal Science/Poultry)",
      "1–2 years of experience in poultry or farm supervision (Freshers can apply if willing to learn)",
      "Ability to work in rural areas and manage multiple farms",
      "Basic understanding of poultry farming and disease management",
      "Good communication and record-keeping skills",
      "Must own a two-wheeler (travel allowance will be provided)",
    ],
    offerTitle: "💰 Salary & Benefits:",
    offers: [
      "Competitive Salary + Performance Incentives",
      "Mobile and Travel Allowance",
      "Training in poultry management and field supervision",
      "Growth opportunities within the organization",
      "Chance to work with a professional and supportive team",
    ],
  },
];

export default function CareerPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
          Career Opportunities
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
          Join our growing team and be part of India's trusted agro-poultry industry. 
          Build your career while making a meaningful impact on rural communities.
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {positions.map((job, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-green-100 hover:border-green-300 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                  {job.title}
                </h2>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-6">
                {/* Responsibilities */}
                <div>
                  <h3 className="flex items-center text-lg font-bold text-green-800 mb-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2 mt-1 text-xs">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="flex items-center text-lg font-bold text-green-800 mb-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Offers */}
                {job.offerTitle && job.offers && (
                  <div>
                    <h3 className="flex items-center text-lg font-bold text-green-800 mb-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      {job.offerTitle.replace(/💼|💰/, '').trim()}
                    </h3>
                    <ul className="space-y-2">
                      {job.offers.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-600 mr-2 mt-1">★</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <div className="p-6 pt-0">
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-green-200 rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
              Ready to Join Our Team?
            </h3>
            <div className="w-16 h-1 bg-green-600 mx-auto mb-4"></div>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">
            Send your resume and cover letter to get started with your career journey
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center bg-green-50 px-6 py-3 rounded-xl border border-green-200">
              <span className="text-green-700 font-medium mr-2">📧</span>
              <a 
                href="mailto:jandjagrovet@gmail.com" 
                className="text-green-700 hover:text-green-800 font-semibold text-lg transition-colors duration-200"
              >
                jandjagrovet@gmail.com
              </a>
            </div>
            
            <a 
              href="mailto:jandjagrovet@gmail.com"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}