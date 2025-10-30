
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const JobDetails = () => {

    const { id } = useParams()
    const [job, setJob] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data))

    }, [id])

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 my-8 border border-gray-200 ">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-6">
                <img
                    src={job?.company_logo}
                    alt={job?.company}
                    className="w-16 h-16 object-contain border rounded-md"
                />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{job?.title}</h1>
                    <p className="text-gray-600 text-sm">{job?.company} — {job?.location}</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{job?.description}</p>

            {/* Job Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
                <div>
                    <strong>Type:</strong> {job?.jobType}
                </div>
                <div>
                    <strong>Category:</strong> {job?.category}
                </div>
                <div>
                    <strong>Application Deadline:</strong> {job?.applicationDeadline}
                </div>
                <div>
                    <strong>Salary:</strong> {job?.salaryRange.min} - {job?.salaryRange.max} {job?.salaryRange.currency.toUpperCase()}
                </div>
                <div>
                    <strong>Status:</strong> <span className={`inline-block px-2 py-1 rounded-full text-xs ${job?.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{job?.status}</span>
                </div>
            </div>

            {/* Requirements */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {job?.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {job?.responsibilities.map((res, index) => (
                        <li key={index}>{res}</li>
                    ))}
                </ul>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-700">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">HR Contact</h3>
                <p><strong>Name:</strong> {job?.hr_name}</p>
                <p><strong>Email:</strong> <a href={`mailto:${job?.hr_email}`} className="text-blue-600 hover:underline">{job?.hr_email}</a></p>
            </div>

            <Link to={`/apply/${job?._id}`} >
                <button className='bg-blue-600 text-white mt-2 px-4 py-2 rounded-md hover:bg-blue-700'>Apply Now</button>
            
            </Link>

            
        </div>
        
    );
};

export default JobDetails;