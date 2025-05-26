import Lottie from 'lottie-react';

import lottieAnimation from "../../../assets/lottie/register.json"

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left  w-96">
                    <Lottie animationData={lottieAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Already have an account?</a></div>
                            <button className="btn btn-neutral mt-4">Register Now</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;