
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faClock,faCheck, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>

      {/* hearo section start*/}
      <div className=" py-20 px-8 text-center border-b-2">
        <h1 className="text-4xl font-bold text-blue-950 mb-4">Find Expert Chartered Accountants Near You</h1>
        <p className="text-lg mb-6">Your one-stop platform for trusted financial guidance and accounting solutions. <br/> Let us connect you with the best professionals.</p>
        <a href="/account" className="bg-white text-blue-600 px-6 py-2 font-medium rounded-md hover:bg-gray-200">
          Search Now
        </a>
      </div>
      {/* hero section end */}

       {/*What We Offer section start  */}
      <div className=" py-10 px-8 bg-white bg-opacity-40">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-5 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Verified Accountants</h3>
          <p className="text-gray-600">All accountants are certified and reviewed for trust and reliability.</p>
        </div>
          <div className="text-center p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faSearch} className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Comprehensive Search</h3>
            <p className="text-gray-600">Easily find and filter accountants based on your specific needs.</p>
          </div>
          <div className="text-center p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Detailed Profiles</h3>
            <p className="text-gray-600">Access complete information about each accountant, including expertise and reviews.</p>
          </div>
          <div className="text-center p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faClock} className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600">Get assistance anytime with our responsive support team.</p>
          </div>
        </div>
      </div>
      {/*What We Offer section end  */}

      {/*How It Works section start  */}
      <div className="py-10 px-8 bg-white bg-opacity-40">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className='border-2 p-4 shadow-lg rounded-lg bg-white bg-opacity-80'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">1</div>
            <h3 className="text-lg font-semibold mt-4">Search Accountants</h3>
            <p className="text-gray-600">Use our advanced search bar to find qualified professionals.</p>
          </div>
          <div className='border-2 p-4 shadow-lg rounded-lg bg-white bg-opacity-80'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">2</div>
            <h3 className="text-lg font-semibold mt-4">View Profiles</h3>
            <p className="text-gray-600">Review detailed profiles and connect with experts that suit your requirements.</p>
          </div>
          <div className='border-2 p-4 shadow-lg rounded-lg bg-white bg-opacity-80'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">3</div>
            <h3 className="text-lg font-semibold mt-4">Contact & Collaborate</h3>
            <p className="text-gray-600">Directly reach out to chartered accountants and start working together.</p>
          </div>
        </div>
      </div>
      {/*How It Works section end  */}

      {/* Users Say section start */}
      <div className="bg-white bg-opacity-40 py-10 px-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-4 border rounded-lg  bg-white bg-opacity-70">
            <p className="italic text-gray-600">"This platform helped me find the right accountant for my startup quickly and efficiently!"</p>
            <h4 className="font-semibold mt-4">— John Doe</h4>
          </div>
          <div className="text-center p-4 border rounded-lg  bg-white bg-opacity-70">
            <p className="italic text-gray-600">"Highly recommend! The accountants I found here were professional and knowledgeable."</p>
            <h4 className="font-semibold mt-4">— Jane Smith</h4>
          </div>
          <div className="text-center p-4 border rounded-lg  bg-white bg-opacity-70">
            <p className="italic text-gray-600">"Fantastic user experience and excellent customer support. Truly top-notch."</p>
            <h4 className="font-semibold mt-4">— Sarah Lee</h4>
          </div>
        </div>
      </div>
       {/* Users Say section end */}

      {/* footer section start */}
      <Footer/>
      {/* footer section end */}
    </div>
  )
}

export default HomePage
