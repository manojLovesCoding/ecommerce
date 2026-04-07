import { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth';

const Sidebar = () => {
    const { logout } = useContext(AdminAuthContext);

    return (
        <div className="bg-white shadow-lg rounded-xl mb-5">
            <div className="p-4">
                <ul className="space-y-3">
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Dashboard</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Categories</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Brands</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Products</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Orders</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Users</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Shipping</a></li>
                    <li><a href="" className="block text-gray-700 hover:text-blue-500">Change Password</a></li>
                    <li>
                        <a
                            href="#"
                            onClick={logout}
                            className="block text-red-500 hover:text-red-700 font-medium"
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar