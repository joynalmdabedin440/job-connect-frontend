import React, { useContext } from 'react';
import { useParams } from 'react-router';
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { user } = useContext(AuthContext)

    const { id } = useParams();

    const handleJobSubmit = (event) => {
        event.preventDefault();
        // Handle job application submission logic here
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        const resume = form.resume.files[0];

        const applicationData = {
            jobId: id,
            userEmail: user?.email,
            name,
            email,
            text,
            resume
        };
        axios.post("http://localhost:3000/applications", applicationData)
            .then(res => {
                console.log(res.data);
                
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Application submitted successfully.",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(err => {
                console.error(err);
            });

        form.reset();




    }
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Job Application</h2>
            <form onSubmit={handleJobSubmit} className="space-y-4" >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700">Why you want to join this company?</label>
                    <input type="text" id="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                    <input required type="file" id="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit Application</button>
            </form>
        </div>
    );
};

export default JobApply;