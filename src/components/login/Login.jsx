import React, { useContext, useEffect, useRef, useState } from 'react';
import './login-reg.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../providers/AuthProvider';
import Navbar from '../nabar/Navbar';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log("error", error.message);

            })

    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const name = form.name.value;
        const password = e.target.password.value;
        const user = { name, email }

        console.log(email, password);

        // reset error and success
        setRegisterError('');
        setSuccess('');

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Users added successfully');
                    form.reset();
                }
            })

        // add validation 
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate('/');
                // if (result.user.emailVerified) {
                //     setSuccess('User Logged in Successfully.')
                // }
                // else {
                //     alert('Please verify your email address.')
                // }
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('pelase provide an email', emailRef.current.value)
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')
            return;
        }

        // send validation email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your email')
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <>
            <Navbar></Navbar>
            <div className="h-screen bg-gray-100 flex justify-center items-center bg">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="name"
                                    type="text"
                                    placeholder="your name"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    type="email"
                                    ref={emailRef}
                                    placeholder="your email"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="password"
                                    type="password"
                                    placeholder="your password"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <button
                                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <a onClick={handleForgetPassword} href="#" className="text-gray-600 hover:text-gray-900">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <button onClick={handleGoogleSignIn} className='btn w-full border border-gray-400 flex items-center gap-4  rounded-3xl' >
                            <img className='bg-transparent w-10 ' src={google} alt="" />
                            <p className='text-2xl text-black font-bold'>Continue with Google</p>
                        </button>

                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Don't have an account? <Link to="/register" className="text-orange-500 hover:text-orange-700">Create New Account</Link>
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;