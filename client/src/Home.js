import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { InfoBar } from "./components/InfoBar";

export default function Home() {
  return (
    <>
      <main className="bg-dark h-screen">
        <InfoBar />
        <Header />
        <div className="text-center lg:w-7/12 w-12/12 md:pt-42 pt-32 pb-52 mx-auto ">
          <div className="relative w-full bg-light h-2/3 md:block hidden ">
            <img className="w-32 absolute -top-12 -right-20 md:block hidden" />
          </div>
          <h1 className="text-white text-7xl md:w-11/12 w-12/12 mx-auto sm:mt-5 font-bold md:mt-5 px-5">
            Turn your browser into a multiplayer.
          </h1>
          <p className="mt-3 text-2xl text-white sm:mt-5 md:mt-5 w-10/12 mx-auto">
            Create, share, and get feedback with collaborative browsers.
          </p>
          <div className="mt-8 sm:mt-12 mx-auto flex gap-3 justify-center">
            <Link
              to="/room"
              className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0  text-white shadow font-semibold rounded-xl items-center justify-center py-3 border border-transparent text-base  bg-purple md:py-4 md:text-lg px-8"
            >
              Create a browser
            </Link>

            <Link
              to="/join"
              className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0  text-white shadow font-semibold rounded-xl items-center justify-center py-3 border border-transparent text-base  bg-purple md:py-4 md:text-lg px-8"
            >
              Join a browser
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
