
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStories = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [images, setImages] = useState(['']);
    const [userRole, setUserRole] = useState('Tourist');
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const addImageField = () => {
        setImages([...images, '']);
    };

    const handleImageChange = (index, value) => {
        const updatedImages = [...images];
        updatedImages[index] = value;
        setImages(updatedImages);
    };

    const removeImageField = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const storyData = {
            title,
            text,
            userImage: user?.photoURL || '',
            userName: user?.displayName || '',
            email: user?.email || '',
            userRole,
            shareCount: 0,
            reactCount: 0,
            images: images.filter(Boolean),
        };

        try {
            const response = await fetch('https://imtiaztourismltdd.vercel.app/stories/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(storyData),
            });

            if (response.ok) {
                toast.success('Story added successfully!');
                navigate('/manage-stories');
            } else {
                toast.error('Error adding story');
            }
        } catch (error) {
            toast.error('Error submitting story');
        }
    };

    return (
        <div className="max-w-4xl mx-auto ml-5 mt-8 p-6 bg-teal-600  rounded-lg shadow-lg">
            <ToastContainer />
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Add Your Story</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-lg font-medium  mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="text" className="text-lg font-medium  mb-2">Story Text</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        className="px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="images" className="text-lg font-medium  mb-2">Image Links</label>
                    {images.map((image, index) => (
                        <div key={index} className="flex space-x-2 mb-2">
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                                placeholder="Image URL"
                                className="px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeImageField(index)}
                                    className="px-3 py-2 bg-red-500  rounded-md hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addImageField}
                        className="px-3 py-2 bg-[#FFA500]/70  rounded-md hover:bg-[#FFA500]"
                    >
                        Add Image
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="userImage" className="text-lg font-medium  mb-2">User Image URL</label>
                        <input
                            type="text"
                            value={user?.photoURL || ''}
                            readOnly
                            className="px-3 py-2  border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userName" className="text-lg font-medium  mb-2">Your Name</label>
                        <input
                            type="text"
                            value={user?.displayName || ''}
                            readOnly
                            className="px-3 py-2  border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-medium  mb-2">Your Email</label>
                        <input
                            type="text"
                            value={user?.email || ''}
                            readOnly
                            className="px-3 py-2  border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userRole" className="text-lg font-medium  mb-2">User Role</label>
                        <select
                            id="userRole"
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            className="px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="Tourist" className="">Tourist</option>
                            <option value="Guide" className="">Guide</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-[#FFA500]/90  font-semibold rounded-md hover:bg-[#FFA500] focus:outline-none focus:ring-2 focus:bg-[#FFA500]/90"
                >
                    Submit Story
                </button>
            </form>
        </div>
    );
};

export default AddStories;
