import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
    return (
        <div className="p-8 bg-gradient-to-r from-[#008080] via-indigo-200 to-[#008080]/80 min-h-screen">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-2xl overflow-hidden">
                {/* Header Section */}
                <motion.div
                    className="bg-gradient-to-r from-[#008080] via-[#008080]/50 to-[#008080] text-white text-center py-10 animate-fade-in"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold mb-2 animate-pulse">Imtiaz Ahmed</h1>
                    <p className="text-lg italic animate-bounce">
                        Full Stack Web Developer | BRAC University Student | Wonder Bangladesh
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="p-8 space-y-8">
                    {/* About Me Section */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow animate-slide-in"
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-[#008080]/70 animate-fade-slide">
                            About Me
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            I am MD SAIDUL ISLAM APU, a passionate web developer and university student dedicated
                            to creating impactful digital experiences. As the founder of Wonder Bangladesh,
                            I aim to merge creativity and technology to deliver solutions that inspire and empower users. My journey reflects dedication, a thirst for innovation, and a commitment to excellence.
                        </p>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow animate-scale-up"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-[#008080]/70">Skills</h2>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Languages:</strong> English, Bangla,Hindi <br />
                            <strong>Technical Skills:</strong> Node.js, React, Express.js, HTML, CSS,
                            JavaScript, Tailwind, Bootstrap, Figma (UI Design)
                        </p>
                    </motion.div>

                    {/* Projects Section */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow animate-wiggle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-[#008080]/80">Projects</h2>
                        <ul className="text-gray-700 space-y-4">
                            <li className="hover:animate-pop">
                                <a
                                    href="https://edumanage-f0f88.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 underline hover:text-purple-800"
                                >
                                    EduManage
                                </a>
                                - A streamline class management, skill learning, and interaction among educational institutions, tutors, and students.
                            </li>
                            <li className="hover:animate-pop">
                                <a
                                    href="https://marathon-manage-system.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    Marathon Management System
                                </a>
                                - designed to help users organize and participate in marathon events seamlessly.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideIn {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes scaleUp {
                    from {
                        transform: scale(0.5);
                    }
                    to {
                        transform: scale(1);
                    }
                }

                @keyframes wiggle {
                    0%, 100% {
                        transform: rotate(-3deg);
                    }
                    50% {
                        transform: rotate(3deg);
                    }
                }

                @keyframes pop {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 1s ease-in-out;
                }

                .animate-slide-in {
                    animation: slideIn 1s ease-in-out;
                }

                .animate-scale-up {
                    animation: scaleUp 1s ease-in-out;
                }

                .animate-wiggle {
                    animation: wiggle 1.5s infinite ease-in-out;
                }

                .hover\\:animate-pop:hover {
                    animation: pop 0.4s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default AboutUsPage;
