import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Welcome to the User Management App
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="text-lg text-center max-w-2xl"
      >
        This app is built using <span className="font-bold">React</span>,{" "}
        <span className="font-bold">Tailwind CSS</span>, and{" "}
        <span className="font-bold">Random User API</span>. It provides
        features like user data management, search functionality, and smooth animations for a professional experience.
      </motion.p>
    </div>
  );
};

export default Home;
