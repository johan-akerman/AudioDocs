import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesomeFlag, faLock } from "@fortawesome/free-solid-svg-icons";
import ProfileIcon from "./ProfileIcon";

export default function Navbar() {
  return (
    <div className="bg-dark border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <FontAwesomeIcon
            icon={faFontAwesomeFlag}
            className="mr-3 text-white text-2xl pt-1"
          />
          <h1 className="text-white text-2xl font-semibold">Clubhouse</h1>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
          <div className="flex gap-2">
            <ProfileIcon user="Johan" color="bg-green" />
            <ProfileIcon user="Axel" color="bg-yellow" />
            <ProfileIcon user="Oliver" color="bg-orange" />
          </div>

          <div className="bg-purple text-white px-5 py-2 rounded-lg cursor-pointer">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Share
          </div>
        </div>
      </div>
    </div>
  );
}
