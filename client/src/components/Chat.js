import React from "react";

export default function Chat() {
  return (
    <div class="w-1/4 border rounded-t-xl absolute right-8 bottom-0 h-96">
      <div class="relative w-full p-6 overflow-y-auto ">
        <ul class="space-y-2">
          <li class="flex justify-start">
            <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-200 rounded-xl shadow">
              <span class="block">Hi</span>
            </div>
          </li>

          <li class="flex justify-end">
            <div class="relative max-w-xl px-4 py-2 bg-blue-500 rounded-xl shadow text-white">
              <span class="block">Hi</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex items-center justify-between p-3 border-t border-gray-300 bottom-0 absolute w-full">
        <input
          type="text"
          placeholder="Message"
          class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
          name="message"
          required
        />

        <button type="submit">
          <svg
            class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
