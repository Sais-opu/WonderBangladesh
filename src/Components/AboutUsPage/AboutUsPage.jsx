import React from "react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
    return (
        <div className="p-6 md:p-10 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-600 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                {/* Header Section */}
                <motion.div
                    className="bg-gradient-to-r from-teal-600 via-indigo-500 to-purple-700 text-white text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">MD SAIDUL ISLAM APU</h1>
                    <p className="text-base md:text-lg italic">
                        Full Stack Web Developer | BRAC University Student | Wonder Bangladesh
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="p-6 md:p-10 space-y-10">
                    {/* About Me Section */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-teal-700">About Me</h2>
                        <p className="text-gray-700 leading-relaxed">
                            I am <strong>MD SAIDUL ISLAM APU</strong>, a passionate web developer and
                            university student dedicated to creating impactful digital experiences.
                            As the founder of <strong>Wonder Bangladesh</strong>, I aim to merge
                            creativity and technology to deliver solutions that inspire and empower
                            users. My journey reflects dedication, a thirst for innovation, and a
                            commitment to excellence.
                        </p>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Skills</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                            <p>
                                <strong>Languages:</strong> English, Bangla, Hindi
                            </p>
                            <p>
                                <strong>Technical Skills:</strong> Node.js, React, Express.js, HTML,
                                CSS, JavaScript, Tailwind, Bootstrap, Figma
                            </p>
                        </div>
                    </motion.div>

                    {/* Projects Section */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Projects</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li>
                                <a
                                    href="https://edumanage-f0f88.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-600 font-medium underline hover:text-teal-800"
                                >
                                    EduManage
                                </a>{" "}
                                – A streamlined class management, skill learning, and interaction
                                platform for institutions, tutors, and students.
                            </li>
                            <li>
                                <a
                                    href="https://marathon-manage-system.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 font-medium underline hover:text-indigo-800"
                                >
                                    Marathon Management System
                                </a>{" "}
                                – Designed to help users organize and participate in marathon events
                                seamlessly.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
