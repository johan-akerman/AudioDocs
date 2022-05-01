import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="top-0">
      <div className="flex justify-between py-6 md:w-10/12 w-11/12 mx-auto ">
        <h1 className="md:pl-2 pl-2 text-3xl text-white font-medium hover:opacity-60">
          Tandem
        </h1>

        <div className="flex pt-0.5 pl-8 ">
          <Link
            className="lg:block hidden text-white text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
            to="/how-it-works"
          >
            How it works
          </Link>

          <Link
            className="lg:block hidden text-white text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
            to="/"
          >
            View on Github
          </Link>
        </div>
      </div>
    </div>
  );
}
