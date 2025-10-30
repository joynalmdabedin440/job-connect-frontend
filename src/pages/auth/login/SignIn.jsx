import React, { useContext } from 'react';
import lottieSignIn from "../../../assets/lottie/lottieSignIn.json"
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../../context/AuthContext/AuthContext';

const SignIn = () => {

    const { signInWithEmail } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be exactly 6 characters long and include both letters and numbers.")


            return

        }

        signInWithEmail(email, password)
            .then(user => {
            navigate(from)
            
            })
            .catch(error => {
            console.log(error.message);
            
        })

        
        

        form.reset()
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left  w-96">
                    <Lottie animationData={lottieSignIn}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><Link to="/register" className="link link-hover">Don't have any account?</Link></div>
                            <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;