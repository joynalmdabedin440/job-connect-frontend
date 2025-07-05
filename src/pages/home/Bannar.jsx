import React from 'react';

import { easeInOut, motion } from 'motion/react'
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"
const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 5, delay: 2, repeat: Infinity, ease: easeInOut }}
                        src={team1}
                        className="max-w-sm w-64 rounded-t-[50px] rounded-br-[40px] shadow-2xl border-b-12 border-b-blue-600 border-l-12 border-l-blue-600"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 5, delay: 2, repeat: Infinity, ease: easeInOut }}
                        src={team2}
                        className="max-w-sm w-64 rounded-t-[50px] rounded-br-[40px] shadow-2xl border-b-12 border-b-blue-600 border-l-12 border-l-blue-600"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 20 }}
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="text-5xl font-bold"> <motion.span
                            animate={{ color: ["#3a34eb", "#6434eb", "#a132ab"] }}
                            transition={{ duration: 2, delay: 2, repeat: Infinity }}
                        >Find Job,</motion.span> <br />Hire Creatives</motion.h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to website in their search for work,
                        making over 140,000 applications every single day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;