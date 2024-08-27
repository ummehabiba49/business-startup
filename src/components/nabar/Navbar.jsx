import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.error(error);

            })
    }

    return (
        <div>
            <nav className=" flex items-center justify-between p-6  pl-14">
                <span className="text-2xl font-bold text-black pl-6">StartupHut</span>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-gray-900 pl-20">Home</Link>
                    <Link to="#" className="text-gray-700 hover:text-gray-900">Product</Link>
                    <Link to="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
                    <Link to="#" className="text-gray-700 hover:text-gray-900">Contact</Link>
                    <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
                    {
                        !user && <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>

                    }
                    {
                        !user && <Link to="/register" className="text-gray-700 hover:text-gray-900">Sign Up</Link>

                    }
                </div>
                <div className="flex-grow"></div>
                {user && <span><button onClick={handleLogout} className='btn'>Sign Out</button> </span>}

            </nav>

        </div>
    );
};

export default Navbar;