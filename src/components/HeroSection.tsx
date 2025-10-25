import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Rhikshitha Kamalakannan
          </h1>
          <p className="text-2xl md:text-4xl text-gray-600 mb-8">
            Frontend Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12">
            Crafting exceptional user experiences with modern web technologies. 
            Specialized in React, Next.js, and building scalable frontend architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600">
            <span>Chennai, India</span>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:rhikshithakannan@gmail.com" className="hover:text-gray-900 transition-colors">
              rhikshithakannan@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <span>8754495662</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
