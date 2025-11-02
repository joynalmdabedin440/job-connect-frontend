import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast"; // optional for nice alerts
import { Link } from "react-router";



const ApplicationCard = ({ application, onDelete }) => {

    

    // Handle Delete
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this application?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3000/applications/${application._id}`);
            toast.success("Application deleted successfully!");
            onDelete(application._id); // tell parent to update UI
        } catch (error) {
            console.error("Error deleting application:", error);
            toast.error("Failed to delete application.");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-5 my-2">

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

            {/* Buttons */}
            <div className="flex flex-col gap-2 items-end">
                <Link to={`/jobs/${application._id}`}>
                    <button
                        className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"

                    >
                        View Details
                    </button>
                </Link>

                <button
                    className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ApplicationCard;
