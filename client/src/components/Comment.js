import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Comment() {
  const [posted, setPosted] = useState(true);
  const [value, setValue] = useState("Comment goes here");

  return (
    <div className="fixed right-12 bg-white rounded-md w-72 p-6 z-10">
      {!posted ? (
        <>
          <div className="flex gap-2 mb-3">
            <div className="rounded-full h-9 w-9 bg-green-300 text-center font-medium pt-1.5 text-white">
              J
            </div>
            <h2 className="pt-1.5">Johan</h2>
          </div>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Comment"
            onChange={(e) => setValue(e.target.value)}
          />
          <div class="flex items-center gap-4 pt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setPosted(true)}
            >
              Comment
            </button>
            <button
              class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
              href="#"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between gap-2 mb-3">
            <div className="flex gap-3">
              <div className="rounded-full h-9 w-9 bg-green-300 text-center font-medium pt-1.5 text-white">
                J
              </div>
              <div className="-mt-1.5">
                <h2 className="pt-1">Johan</h2>
                <p className="text-xs">10:40 PM Today</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faTrashCan} className="mt-2" />
          </div>

          <p>{value}</p>
        </>
      )}
    </div>
  );
}
