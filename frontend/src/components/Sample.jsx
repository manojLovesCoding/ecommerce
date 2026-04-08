import React from 'react'
import Layout from './common/Layout'
import Sidebar from './common/Sidebar'
import { Link } from 'react-router-dom'

const Sample = () => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mt-8 pb-4">
                    <h4 className="text-2xl font-semibold">Your Title</h4>
                    <Link to="/your-path" className='btn btn-primary'>Button</Link>
                </div>

                <div className="flex flex-col md:flex-row gap-6">

                    {/* Sidebar */}
                    <div className="w-full md:w-1/4">
                        <Sidebar />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/4">
                        <div className='col-md-9'>
                            <div className='card shadow'>
                                <div className='card-body p-4'>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Sample