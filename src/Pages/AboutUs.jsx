import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      
      <div className=" min-h-screen flex flex-col items-center py-10">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">
            About Us
          </h1>
          <p className="text-center text-xl mb-12">
            Welcome to CharteredPro, your trusted platform for connecting with
            highly qualified Chartered Accountants. Our mission is to empower
            individuals, entrepreneurs, and businesses with reliable financial
            solutions and expert advice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Our Vision
              </h2>
              <p className="text-lg mb-4">
                We envision a future where accessing professional financial
                services is seamless, efficient, and personalized. Through
                innovation and commitment, we aim to foster financial literacy
                and elevate global standards in accountancy.
              </p>

              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Our Mission
              </h2>
              <p className="text-lg mb-4">
                Our mission is to bridge the gap between individuals,
                businesses, and top-tier Chartered Accountants. We focus on
                delivering trusted, professional, and highly accurate financial
                services to meet diverse needs.
              </p>

              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Why Choose CharteredPro?
              </h2>
              <ul className="list-disc list-inside text-lg ">
                <li>
                  Access to a network of certified and experienced Chartered
                  Accountants.
                </li>
                <li>
                  Transparent pricing and streamlined communication channels.
                </li>
                <li>
                  Comprehensive services covering accounting, taxation,
                  auditing, and financial planning.
                </li>
                <li>
                  A user-friendly platform optimized for efficiency and
                  convenience.
                </li>
                <li>
                  Dedicated support to ensure your financial needs are met at
                  every step.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-8">
                What We Offer
              </h2>
              <p className=" mb-4">
                Whether you're an entrepreneur, a freelancer, or managing
                corporate finances, we provide tailored solutions including:
              </p>
              <ul className="list-disc list-inside  text-lg">
                <li>Taxation services: Filing, planning, and compliance.</li>
                <li>
                  Auditing and assurance to strengthen trust in your financial
                  statements.
                </li>
                <li>Financial advisory for long-term growth and stability.</li>
                <li>
                  Bookkeeping and account management for businesses of all
                  sizes.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div>
              <img
                src="../assets/account.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Additional Section */}
          <div className="mt-12 text-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Our Commitment to You
            </h2>
            <p className=" text-lg mb-4">
              At CharteredPro, we are committed to upholding the highest
              standards of integrity, professionalism, and customer
              satisfaction. Whether you are seeking assistance for personal
              financial matters or complex business strategies, we have the
              expertise and passion to guide you.
            </p>
            <p className=" text-lg">
              Join our growing community and experience a platform where your
              financial goals and success are our priority.
            </p>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
