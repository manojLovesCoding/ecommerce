import { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { logout } = useContext(AdminAuthContext);

    return (
        <div className="bg-white shadow-lg rounded-xl mb-5">
            <div className="p-4">
                <ul className="space-y-3">
                    <li><Link to="/admin/dashboard" className="block text-gray-700 hover:text-blue-500">Dashboard</Link></li>
                    <li><Link to="/admin/categories" className="block text-gray-700 hover:text-blue-500">Categories</Link></li>
                    <li><Link to="/admin/brands" className="block text-gray-700 hover:text-blue-500">Brands</Link></li>
                    <li><Link to="/admin/products" className="block text-gray-700 hover:text-blue-500">Products</Link></li>
                    <li><Link to="/admin/orders" className="block text-gray-700 hover:text-blue-500">Orders</Link></li>
                    <li><Link to="/admin/users" className="block text-gray-700 hover:text-blue-500">Users</Link></li>
                    <li><Link to="/admin/shipping" className="block text-gray-700 hover:text-blue-500">Shipping</Link></li>
                    <li><Link to="/admin/change-password" className="block text-gray-700 hover:text-blue-500">Change Password</Link></li>
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