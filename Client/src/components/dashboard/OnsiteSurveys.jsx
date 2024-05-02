import React from "react";

function OnsiteSurveys() {
  return (
    <div className="bg-slate-100 w-1/2 h-auto rounded-lg drop-shadow-xl shadow-slate-300 mt-8 mr-11 p-7">
      <h1 className="text-emerald-500 text-xl font-bold">Onsite Surveys</h1>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase  ">
            <tr>
              <th scope="col" class="py-3">
                Feedback
              </th>
              <th scope="col" class="py-3">
                NP Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <th scope="row" class="py-4 font-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </th>
              <td class="px-6 py-4">Yes</td>
            </tr>
            <tr class="border-b">
              <th scope="row" class="py-4 font-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </th>
              <td class="px-6 py-4">No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OnsiteSurveys;
