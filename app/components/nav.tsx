import Link from "next/link"
export default function navbar(){
    return(
    <div className = "bg-gray-700   text-xl text-white " >
        <div className="flex justify-center">
        <Link href="/" className=" ps-9 p-7 hover:bg-gray-300 hover:text-black " >Home</Link>
        <br />
        <Link href="/about" className="p-7 hover:bg-gray-300 hover:text-black">About</Link>
        <br />
        <Link href="/contact" className="p-7 hover:bg-gray-300 hover:text-black">Contact</Link>
        <br />
        <Link href="/jobs" className="p-7 hover:bg-gray-300 hover:text-black">Jobs</Link>
        <br />
        <Link href="/applynow" className="p-7 hover:bg-gray-300 hover:text-black">Apply now</Link>
        
        </div>
     </div>
    );
}