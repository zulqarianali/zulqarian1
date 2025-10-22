import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} // Placeholder for hero video/image
    >
      <div className="absolute z-10 bg-black bg-opacity-60 inset-0"></div>

      <div className="z-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Zulqarnain Ali
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeIn" }}
        >
          Video Editor & Graphic Designer
        </motion.p>
        <div className="mt-8 space-x-4">
          <Link href="/portfolio" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View Portfolio
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
