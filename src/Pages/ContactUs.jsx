import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="">
    <div className=" min-h-screen flex flex-col items-center py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">Contact Us</h1>
        <p className="text-center text-xl  mb-12">
          We'd love to hear from you! Whether you have a question about our services, need support, 
          or want to provide feedback, feel free to reach out to us.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium 0">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  rows="5"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Contact Information */}
          <div className="space-y-8 bg-white p-5 bg-opacity-50">
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Office Address</h2>
              <p className='text-lg'>
                CharteredPro HQ<br />
                123 Financial Street<br />
                Business City, BC 45678<br />
                Country
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Phone</h2>
              <p className='text-lg'>+123 456 7890</p>
              <p className='text-lg'>+987 654 3210</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Email</h2>
              <p className="text-blue-600 underline hover:text-blue-700 text-lg">
                support@charteredpro.com
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="#" className="text-blue-400"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="#" className="text-orange-500"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="#" className="text-blue-800"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default ContactUs
