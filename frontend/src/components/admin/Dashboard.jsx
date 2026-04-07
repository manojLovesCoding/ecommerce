import Layout from '../common/Layout'
import Sidebar from '../common/Sidebar'

const Dashboard = () => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mt-8 pb-4">
                    <h4 className="text-2xl font-semibold">Dashboard</h4>
                </div>

                <div className="flex flex-col md:flex-row gap-6">

                    {/* Sidebar */}
                    <div className="w-full md:w-1/4">
                        <Sidebar />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Users Card */}
                            <div className="bg-white shadow-lg rounded-xl p-4">
                                <div>
                                    <h5 className="text-2xl font-bold">0</h5>
                                    <span className="text-gray-500">Users</span>
                                </div>
                                <div className="mt-4">
                                    <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        View Users
                                    </a>
                                </div>
                            </div>

                            {/* Orders Card */}
                            <div className="bg-white shadow-lg rounded-xl p-4">
                                <div>
                                    <h5 className="text-2xl font-bold">0</h5>
                                    <span className="text-gray-500">Orders</span>
                                </div>
                                <div className="mt-4">
                                    <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        View Orders
                                    </a>
                                </div>
                            </div>

                            {/* Products Card */}
                            <div className="bg-white shadow-lg rounded-xl p-4">
                                <div>
                                    <h5 className="text-2xl font-bold">0</h5>
                                    <span className="text-gray-500">Products</span>
                                </div>
                                <div className="mt-4">
                                    <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        View Products
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard