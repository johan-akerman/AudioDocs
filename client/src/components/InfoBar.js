import { Link } from "react-router-dom";

export function InfoBar() {
  return (
    <div className=" bg-purple text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="relative">
          <p className="ml-3 text-black font-medium">
            <span className="mr-2">🎉</span>
            <span>
              Tandem was just released and we would love to get your feedback.{" "}
              <Link to="/" className="border-b-2 border-black ">
                Give feedback
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
