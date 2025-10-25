import { motion } from "motion/react";

export function AchievementsShowcase() {
  const achievements = [
    {
      award: "1st Place",
      title: "Hack-a-bot",
      description: "RPA Hackathon organized by UiPath",
      year: "2023"
    },
    {
      award: "3rd Place",
      title: "National Coding Contest",
      description: "Conducted by Computer Society of India (CSI)",
      year: "2023"
    },
    {
      award: "Department Topper",
      title: "Academic Excellence",
      description: "Top performer in 2nd and 5th semester",
      year: "2022-2023"
    },
    {
      award: "3rd Place",
      title: "RPA Coursework Award",
      description: "Department-wide Robotics Process Automation coursework",
      year: "2023"
    }
  ];

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl text-center mb-20"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-sm text-gray-500 mb-2">{achievement.year}</div>
              <div className="text-2xl mb-2">{achievement.award}</div>
              <h3 className="text-xl mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
