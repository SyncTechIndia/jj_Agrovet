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
      "Chance to work with one of India’s trusted agro-poultry brands",
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
      "Operate company’s POLOXY poultry ERP software for entries and reporting",
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
  return (
 <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-20">
           <h2 className="text-4xl font-bold text-green-700 mb-10">Career Opportunities</h2>

      {positions.map((job, index) => (
        <div key={index} className="mb-12 bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{job.title}</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Key Responsibilities:</h3>
            <ul className="list-disc list-inside space-y-1">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">✅ Requirements:</h3>
            <ul className="list-disc list-inside space-y-1">
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {job.offerTitle && job.offers && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{job.offerTitle}</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.offers.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <p className="text-center text-gray-600 mt-10">
        To apply, send your resume to <a href="mailto:jandjagrovet@gmail.com" className="text-blue-500 underline">jandjagrovet@gmail.com</a>
      </p>
    </div>
  );
}
