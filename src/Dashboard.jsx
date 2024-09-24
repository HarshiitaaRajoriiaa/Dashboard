import React from "react";
import axios from "axios";

export function Dashboard() {
  const handleDownload=async ()=>{
  try {
    const response = await axios.get('https://maharastra-backend.vercel.app/download-csv');
    const downloadLink = response.data.downloadUrl;
    // setDownloadUrl(downloadLink);
    
    // Redirect the user to the download URL
    window.location.href = downloadLink;
  } catch (error) {
    console.error("Error fetching the download URL", error);
    }
  }
  return (
    <>
      <div className="flex justify-between items-center drop-shadow-xl border-y-2 w-screen bg-blue-50 sticky top-0 z-50 ">
        <h2 className="text-indigo-800 text-3xl p-2">ADMIN DASHBOARD 📊</h2>
        <button className="h-fit w-fit bg-green-400 p-2 mr-6 drop-shadow-lg text-white hover:bg-green-500
        " onClick={handleDownload}>
          DOWNLOAD CSV 📩
        </button>
      </div>
      <div className="w-60 h-40 bg-gray-100 p-4 m-4 rounded-lg shadow-lg flex flex-col justify-between text-center text-gray-800 font-medium text-lg ">
        <div>
          <span className="inline-block font-semibold text-gray-600">
            Surveys submitted:📑
          </span>
        </div>
        <div className="bg-teal-600 py-3 text-white rounded-md flex items-center justify-center text-3xl font-bold shadow-md">
          xyx
        </div>
      </div>

      {/* //! REGION */}
      <div className="flex justify-center">
        <div className="w-5/6 bg-gray-50 p-4 m-4 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-xl">
          <h1 className="text-3xl text-indigo-800">REGION-🗺️</h1>
          <div className="flex flex-wrap justify-center">
            {[
              "MUMBAI",
              "KONKAN DIVISION",
              "NASHIK DIVISION",
              "PUNE DIVISION",
              "AURANGABAD DIVISION",
              "NAGPUR",
            ].map((region) => (
              <div
                key={region}
                className="w-56 h-40 bg-blue-50 p-4 m-3 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-lg"
              >
                {region}
                <div className="bg-indigo-500 rounded-md h-16 text-white flex items-center justify-center mt-3 text-2xl shadow-sm">
                  xyx
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* //! AGE GROUPS */}
      <div className="flex justify-center">
        <div className="w-5/6 bg-gray-50 p-4 m-4 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-xl">
          <h1 className="text-3xl text-indigo-800">AGE GROUPS-🔢</h1>
          <div className="flex flex-wrap justify-center">
            {["BELOW 18", "18-29", "30-44", "45-59", "60 AND ABOVE"].map(
              (ageGroup) => (
                <div
                  key={ageGroup}
                  className="w-56 h-40 bg-slate-50 p-4 m-3 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-lg"
                >
                  {ageGroup}
                  <div className="bg-indigo-500 rounded-md h-16 text-white flex items-center justify-center mt-3 text-2xl shadow-sm">
                    xyx
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* //! GENERATION GROUPS */}
      <div className="flex justify-center">
        <div className="w-5/6 bg-gray-50 p-4 m-4 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-xl">
          <h1 className="text-3xl text-indigo-800">GENERATION GROUP-🚸</h1>
          <div className="flex flex-wrap justify-center">
            {[
              "GEN-Z",
              "MILLENNIALS",
              "GEN-X",
              "BABY BOOMERS",
              "SILENT GENERATION",
            ].map((generation) => (
              <div
                key={generation}
                className="w-56 h-40 bg-slate-50 p-4 m-3 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-lg"
              >
                {generation}
                <div className="bg-indigo-500 rounded-md h-16 text-white flex items-center justify-center mt-3 text-2xl shadow-sm">
                  xyx
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* //! NCCS */}
      <div className="flex justify-center">
        <div className="w-5/6 bg-gray-50 p-4 m-4 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-xl">
          <h1 className="text-3xl text-indigo-800">NCCS-🔣</h1>
          <div className="flex flex-wrap justify-center">
            {[
              "NCCS A (17% quota)",
              "NCCS B (22% quota)",
              "NCCS C (29% quota)",
              "NCCS D/E (32% quota)",
            ].map((nccs) => (
              <div
                key={nccs}
                className="w-56 h-40 bg-slate-50 p-4 m-3 rounded-md shadow-lg flex-col text-center text-gray-700 font-light text-lg"
              >
                {nccs}
                <div className="bg-indigo-500 rounded-md h-16 text-white flex items-center justify-center mt-3 text-2xl shadow-sm">
                  xyx
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
