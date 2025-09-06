import React, { useEffect, useState } from 'react';
import { FacebookShareButton } from 'react-share';
import { useNavigate } from 'react-router-dom';

const TouristStorySection = ({ isLoggedIn }) => {
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch('https://imtiaztourismltdd.vercel.app/stories/random');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const randomStories = data.sort(() => Math.random() - 0.5).slice(0, 4);
                setStories(randomStories);
            } catch (error) {
                console.error('Error fetching stories:', error.message);
            }
        };

        fetchStories();
    }, []);

    //  share button click
    const handleShare = (storyId) => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    };

    return (
        <div className="tourist-story-section p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Tourist Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stories.map((story) => (
                    <div key={story.id || story._id} className="story-card bg-white rounded shadow p-4">
                        <img
                            src={Array.isArray(story.images) && story.images.length > 0 ? story.images[0] : story.images}
                            alt={Array.isArray(story.images) ? story.images.join(', ') : story.title}
                            className="w-full h-48 object-cover rounded mb-4"
                        />

                        <div className="flex">
                            <div className="w-1/3">
                                <img
                                    className="w-20 h-20 rounded-full"
                                    src={story.userImage || '/default-avatar.png'}
                                    alt={`${story.userName}'s profile picture`}
                                    onError={(e) => {
                                        e.target.src = '/default-avatar.png';
                                    }}
                                />
                                <p className="text-center mt-1">{story.userName}</p>
                            </div>

                            <div className="w-2/3 pl-2">
                                <h3 className="text-lg font-bold">{story.title}</h3>
                            </div>
                        </div>

                        <p className="text-sm text-gray-700 mt-2">
                            {story.text?.substring(0, 100)}...
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                            <FacebookShareButton
                                url={`https://your-site.com/story/${story._id}`} 
                                quote={story.title}
                                onClick={() => handleShare(story._id)}
                            >
                                <button className="bg-blue-400  px-4 py-2 rounded hover:bg-[#FFA500]/80">
                                    Share on Facebook
                                </button>
                            </FacebookShareButton>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 space-x-4">
                <button
                    className="bg-[#3F0113] hover:bg-[#FFA500] text-white px-6 py-2 rounded"
                    onClick={() => navigate('/community')}
                >
                    All Stories
                </button>
                <button
                    className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-white px-6 py-2 rounded"
                    onClick={() => navigate('/addstories')}
                >
                    Add Stories
                </button>
            </div>
        </div>
    );
};

export default TouristStorySection;
