import React from "react";
import { Link } from "react-router";
import { MapPin, Clock, Briefcase } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="w-full max-w-sm p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:scale-105">
      {/* Company Info */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-12 h-12 object-contain rounded-md"
          />
          <div>
            <h3 className="font-semibold text-sm">{job.company}</h3>
            <div className="flex items-center text-xs text-gray-500">
              <MapPin size={12} className="mr-1" />
              {job.location}
            </div>
          </div>
        </div>
        <div className="text-green-500 text-lg">⚡</div>
      </div>

      {/* Job Title */}
      <h2 className="mt-4 font-semibold text-base text-gray-800">
        {job.title}
      </h2>

      {/* Meta Info */}
      <div className="flex items-center text-gray-400 text-xs gap-4 mt-1">
        <div className="flex items-center gap-1">
          <Briefcase size={12} />
          {job.jobType}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          4 minutes ago
        </div>
      </div>

      {/* Short Description */}
      <p className="text-sm text-gray-600 mt-3 line-clamp-2">
        {job.description || "Exciting opportunity to work with a dynamic team on scalable projects."}
      </p>

      {/* Tech Skills */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.requirements.slice(0, 3).map((tech, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-5">
        <div className="text-blue-600 font-bold text-lg">
          ৳{job.salaryRange.min}/<span className="text-sm font-medium">Month</span>
        </div>
        <Link
          to={`/jobs/${job._id}`}
          className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-200 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
