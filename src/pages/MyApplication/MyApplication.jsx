import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import ApplicationCard from './ApplicationCard';

const MyApplication = () => {

    const { user } = useContext(AuthContext)
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/applications?email=${user.email}`)
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error("Error fetching applications:", error);
            });
    }, [user?.email])
    const handleDeleteApplication = (id) => {
  setApplications((prev) => prev.filter((app) => app._id !== id));
};



    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Applications</h2>
            {
                applications.map(application => <ApplicationCard key={application._id} application={application} onDelete={handleDeleteApplication} />)
            }
            
        </div>
    );
};

export default MyApplication;