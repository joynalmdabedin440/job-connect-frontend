import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const PopularJobs = () => {

    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/jobs")
            .then(data => data.json())
            .then(res => {
            setJobs(res)
            
        })
    }, [])
    
    


    return (
        <div>

            <div className='grid grid-cols-3 gap-10'>
                {
                    jobs.map((job)=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularJobs;