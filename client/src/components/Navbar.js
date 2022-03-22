import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <h1 className="text-black text-xl font-semibold">AudioDocs</h1>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
          <div className="rounded-full h-8 w-8 bg-green-300 text-center font-medium pt-1 text-white">
            J
          </div>

          <div className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Share
          </div>
        </div>
      </div>
    </div>
  );
}
