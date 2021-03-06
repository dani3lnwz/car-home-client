import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useAdmin from './../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-gray-500'>Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <>
                        <li><Link to="/dashboard/order">My Orders</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    </>
                    }
                    
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    { admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addPart">Add A Part</Link></li>
                        <li><Link to="/dashboard/managePart">Manage Parts</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;