import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from "../../firebase/firebase.init";
import { AuthContext } from "../providers/AuthProvider";

const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const auth = getAuth(app);
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        const confirm = e.target.confirm.value;
        console.log(name, email, password, accepted, confirm);

        // reset error and success
        setRegisterError('');
        setSuccess('');

        if (password !== confirm) {
            setRegisterError('Your Password did not match');
            return;

        }

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and conditions!')
            return;
        }

        createUser(email, password)

            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.')
                navigate('/');


            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })





    }

    return (
        <>
            <div className="h-screen bg-gray-100 flex justify-center items-center bg">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md m-44">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Register</h2>
                    <form onSubmit={handleSignUp} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="-mx-3 mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>
                        <div className=" -mx-3 mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    type="email"
                                    placeholder="your email"
                                />
                            </div>
                        </div>
                        <div className=" -mx-3 mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0  relative">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none block w-full  bg-gray-200 text-gray-700  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="your password"
                                />
                                <span className="absolute right-6 bottom-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                            </div>

                        </div>
                        <div className=" -mx-3 mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0  ">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="confirm"
                                    type="password"

                                    placeholder="confirm password"
                                />

                            </div>
                        </div>
                        <div className="mb-2 w-full">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2 w-full" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                        </div>
                        <div className=" -mx-3 mb-6 col-span-2">
                            <div className="w-full  px-3 mb-6 md:mb-0 ">
                                <input
                                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                                    type="submit" value="Register"
                                >

                                </input>
                            </div>
                        </div>

                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Already have an account? <Link to="/login" className="text-orange-500 hover:text-orange-700">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;




