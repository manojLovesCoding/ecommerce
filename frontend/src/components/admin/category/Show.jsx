import Sidebar from '../../common/Sidebar'
import Layout from '../../common/Layout'
import { adminToken, apiUrl } from '../../common/http'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PencilSquare, Trash } from 'react-bootstrap-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

const Show = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [mode, setMode] = useState('create') // create | edit

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm()

    // ================= FETCH
    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${apiUrl}/categories`, {
                headers: { Authorization: `Bearer ${adminToken()}` }
            })
            setCategories(res.data.data || res.data)
        } catch (error) {
            toast.error("Failed to fetch categories")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    // ================= OPEN CREATE
    const openCreateModal = () => {
        setMode('create')
        reset({ id: null, name: '', status: 1 })
        setModalOpen(true)
    }

    // ================= OPEN EDIT
    const openEditModal = (category) => {
        setMode('edit')
        setValue('id', category.id)
        setValue('name', category.name)
        setValue('status', category.status)
        setModalOpen(true)
    }

    // ================= SAVE (CREATE/EDIT)
    const onSubmit = async (data) => {
        try {
            if (mode === 'create') {
                await axios.post(`${apiUrl}/categories`, data, {
                    headers: { Authorization: `Bearer ${adminToken()}` }
                })
                toast.success("Category created 🎉")
            } else {
                await axios.put(`${apiUrl}/categories/${data.id}`, data, {
                    headers: { Authorization: `Bearer ${adminToken()}` }
                })
                toast.success("Category updated ✏️")
            }

            setModalOpen(false)
            fetchCategories()
        } catch (error) {
            toast.error("Operation failed ❌")
        }
    }

    // ================= DELETE
    const handleDelete = async (id) => {
        if (!window.confirm("Delete this category?")) return
        try {
            await axios.delete(`${apiUrl}/categories/${id}`, {
                headers: { Authorization: `Bearer ${adminToken()}` }
            })
            toast.success("Category deleted 🗑️")
            fetchCategories()
        } catch (error) {
            toast.error("Delete failed ❌")
        }
    }

    return (
        <Layout>
            <ToastContainer position="top-right" autoClose={2000} />
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mt-8 mb-6">
                    <h4 className="text-2xl font-semibold">Categories</h4>
                    <button
                        onClick={openCreateModal}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        Create
                    </button>
                </div>

                <div className="flex gap-6">
                    <div className="w-1/4">
                        <Sidebar />
                    </div>

                    <div className="w-3/4">
                        <div className="bg-white shadow rounded-xl p-6">
                            {loading ? (
                                <p className="text-gray-500">Loading...</p>
                            ) : (
                                <table className="w-full border">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="p-2 text-left">ID</th>
                                            <th className="p-2 text-left">Name</th>
                                            <th className="p-2 text-left">Status</th>
                                            <th className="p-2 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.length > 0 ? (
                                            categories.map(cat => (
                                                <tr key={cat.id} className="border-t hover:bg-gray-50">
                                                    <td className="p-2">{cat.id}</td>
                                                    <td className="p-2">{cat.name}</td>
                                                    <td className="p-2">
                                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                                                            ${cat.status
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-red-100 text-red-700'
                                                            }`}>
                                                            {cat.status ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </td>
                                                    <td className="p-2 flex gap-3">
                                                        <button
                                                            onClick={() => openEditModal(cat)}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            <PencilSquare size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(cat.id)}
                                                            className="text-red-600 hover:text-red-800"
                                                        >
                                                            <Trash size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center py-6 text-gray-500">
                                                    No records found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MODAL ================= */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-xl font-semibold mb-4">
                                {mode === 'create' ? 'Create Category' : 'Edit Category'}
                            </h2>

                            {/* Name */}
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className="w-full border px-3 py-2 mb-2 rounded"
                                placeholder="Category name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mb-2">Name is required</p>}

                            {/* Status */}
                            <select
                                {...register("status")}
                                className="w-full border px-3 py-2 mb-4 rounded"
                            >
                                <option value={1}>Active</option>
                                <option value={0}>Inactive</option>
                            </select>

                            {/* Hidden ID for edit */}
                            <input type="hidden" {...register("id")} />

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="bg-gray-300 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    {mode === 'create' ? 'Create' : 'Update'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default Show