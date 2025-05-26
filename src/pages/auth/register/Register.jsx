import Lottie from 'lottie-react';

import lottieAnimation from "../../../assets/lottie/register.json"

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be exactly 6 characters long and include both letters and numbers.")


            return
            
        }

        console.log(email);
        




        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left  w-96">
                    <Lottie animationData={lottieAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Already have an account?</a></div>
                            <button type="submit" className="btn btn-neutral mt-4">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

