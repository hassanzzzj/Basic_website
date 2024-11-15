export default function footer(){
    return(
        <footer className="bg-white shadow-md mt-10">
      <div className="max-w-4xl mx-auto py-4 flex justify-between items-center">
        <div className="text-gray-600">
          &copy; {new Date().getFullYear()} Hassan's Project. All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="/about" className="text-blue-500 hover:underline">About</a>
          <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
          <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
    );
}