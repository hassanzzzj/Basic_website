import Link from "next/link";

export default function home(){
  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center  bg-pink-200 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a simple home page styled with Tailwind CSS in React and TypeScript. Enjoy your stay!
      </p>
      <button  className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"><Link href='/applynow'>
        Get Started </Link>
      </button>
    </div>
  </div>
  );
}