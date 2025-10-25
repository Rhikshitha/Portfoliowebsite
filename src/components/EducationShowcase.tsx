import { motion } from "motion/react";

export function EducationShowcase() {
  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-12">Education</h2>
          
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm">
            <div className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              9.58 CGPA
            </div>
            <h3 className="text-2xl md:text-3xl mb-4">
              Rajalakshmi Engineering College
            </h3>
            <p className="text-xl text-gray-600 mb-2">
              B.E - Computer Science and Engineering
            </p>
            <p className="text-gray-500">
              Chennai • Graduated May 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
