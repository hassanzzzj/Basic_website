export default function contact(){


  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center  ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">
          We are a team of passionate individuals dedicated to providing the best services and experiences for our users. Our mission is to create innovative solutions that empower our community and enhance everyday life.
        </p>
     <br />
        <button type="submit" className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Send Message
        </button>
      
    </div>
  </div>
    )
}