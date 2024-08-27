import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Dashboard = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 h-screen p-4 pt-6">
                <div className="text-white text-lg font-bold mb-4">Dashboard</div>
                <ul className="list-none mb-4">
                    <li className="mb-2">
                        <Link to="/" className="text-white hover:text-gray-200">
                            <i className="fas fa-home mr-2" /> Home
                        </Link>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-white hover:text-gray-200">
                            <i className="fas fa-chart-bar mr-2" /> Analytics
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-white hover:text-gray-200">
                            <i className="fas fa-cog mr-2" /> Settings
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4 pt-6">
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        New Report
                    </button>
                </div>

                {/* Section 1: Overview */}
                <div className="bg-white rounded shadow-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Overview</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full xl:w-1/4 p-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Total Users</h2>
                                <p className="text-3xl font-bold">1000</p>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/4 p-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
                                <p className="text-3xl font-bold">$10,000</p>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/4 p-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Total Orders</h2>
                                <p className="text-3xl font-bold">500</p>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/4 p-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Average Order Value</h2>
                                <p className="text-3xl font-bold">$20</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Sales */}
                <div className="bg-white rounded shadow-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Sales</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full xl:w-1/2 p-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Top Selling Products</h2>
                                <ul className="list-none mb-4">
                                    <li className="mb-2">
                                        <span className="text-lg font-bold">Product 1</span>
                                        <span className="text-gray-600">($1000)</span>
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-lg font-bold">Product 2</span>
                                        <span className="text-gray-600">($800)</span>
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-lg font-bold">Product 3</span>
                                        <span className="text-gray-600">($600)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2 p-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Sales by Region</h2>
                            </div>
                        </div>
                        <div>
                            <h2>{users.length}</h2>
                            <div>
                                {
                                    users.map(user => <p className='text-center text-3xl text-black font-bold mx-9'
                                        key={user._id}
                                    > {user.name} : {user.email} {user._id}
                                        <button className='btn btn-error'
                                            onClick={() => handleDelete(user._id)}
                                        >Delete</button> </p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
