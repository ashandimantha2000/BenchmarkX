import React from "react";

function SessionRecordings() {
  return (
    <div className="bg-slate-100 w-2/3 h-fit rounded-lg drop-shadow-xl shadow-slate-300 mt-8 mr-11 p-7">
      <h1 className="text-fuchsia-500 text-xl font-bold">Session Recordings</h1>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <tbody>
            <tr class="border-b">
              <th scope="row" class="py-4 font-normal">
                10:35AM - March, 01, 2024
              </th>
              <button>
                <td class="px-6 py-4 font-extrabold">View</td>
              </button>
            </tr>
            <tr class="border-b">
              <th scope="row" class="py-4 font-normal">
                11:26AM - March, 01, 2024
              </th>
              <button>
                <td class="px-6 py-4 font-extrabold">View</td>
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SessionRecordings;
