import React from "react";

const ApplicationCard = ({ application }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-5">
      
      {/* Company Logo */}
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={application.logo}
          alt={application.company}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Job Details */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {application.title}
        </h2>
        <p className="text-sm text-gray-500 mb-1">{application.company}</p>
        <p className="text-sm text-gray-500">{application.location}</p>

        {/* Dates */}
        <div className="flex gap-4 mt-3 text-sm text-gray-600">
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            Applied: {application.appliedTime}
          </span>
          <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
            Deadline: {application.applicationDeadline}
          </span>
        </div>
      </div>

      {/* Status / Action Button */}
      <div className="flex flex-col items-end">
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
