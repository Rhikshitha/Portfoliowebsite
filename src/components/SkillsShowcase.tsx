import { motion } from "motion/react";

export function SkillsShowcase() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Ember.js"]
    },
    {
      category: "Styling",
      skills: ["Tailwind CSS", "SASS", "LESS", "CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Django", "Python", "GraphQL"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MySQL", "ClickHouse"]
    },
    {
      category: "Testing",
      skills: ["Jest", "Playwright", "QUnit", "Storybook"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "GitHub Actions", "WebSockets"]
    }
  ];

  return (
    <section className="py-32 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl text-center mb-20"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-6"
            >
              <h3 className="text-xl mb-4 text-gray-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
