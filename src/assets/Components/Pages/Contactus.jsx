import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-20">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-green-700 mb-10">Contact Us</h2>

      {/* Contact Section - Full Width Card */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Contact Details */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Details</h3>
          <p className="text-gray-800"><strong>Name:</strong> XYZ</p>
          <p className="text-gray-800"><strong>Email:</strong> xyz@email.com</p>
          <p className="text-gray-800"><strong>Mobile:</strong> +91 9876543210</p>
        </div>

        {/* Contact Form - Floating Labels & Underline Input */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h3>
          <form className="space-y-6">
            <div className="relative">
              <input type="text" id="name" required className="peer w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700 text-gray-900 bg-transparent py-2" placeholder=" " />
              <label htmlFor="name" className="absolute left-0 top-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-700">
                Name
              </label>
            </div>

            <div className="relative">
              <input type="tel" id="phone" required className="peer w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700 text-gray-900 bg-transparent py-2" placeholder=" " />
              <label htmlFor="phone" className="absolute left-0 top-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-700">
                Phone Number
              </label>
            </div>

            <div className="relative">
              <input type="email" id="email" required className="peer w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700 text-gray-900 bg-transparent py-2" placeholder=" " />
              <label htmlFor="email" className="absolute left-0 top-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-700">
                Email
              </label>
            </div>

            <div className="relative">
              <input type="text" id="purpose" required className="peer w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700 text-gray-900 bg-transparent py-2" placeholder=" " />
              <label htmlFor="purpose" className="absolute left-0 top-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-700">
                Purpose
              </label>
            </div>

            <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section at Bottom */}
      <div className="w-full max-w-4xl mt-10">
        <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">Our Location</h3>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.045869673037!2d72.827325!3d19.0760905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b5aa9aaf%3A0x5e3b0ffcb704e25e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648325871534!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
