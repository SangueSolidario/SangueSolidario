import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to={"/"}
        >
          <HeartPulse className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" />
          <span className="ml-3 text-xl">SangueSolidario</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link to={"/dashboard"} className="mr-5 hover:text-gray-900">
            Dashboard
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
