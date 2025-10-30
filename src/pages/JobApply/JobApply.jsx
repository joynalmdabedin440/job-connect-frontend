import React from 'react';

const JobApply = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Job Application</h2>
            <form className="space-y-4">
                <div>       
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                    <input type="file" id="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit Application</button>
            </form>
        </div>
    );
};

export default JobApply;