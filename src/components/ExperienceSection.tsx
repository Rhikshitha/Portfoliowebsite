import { motion } from "motion/react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Stitchflow",
      role: "Frontend Engineer",
      period: "Nov 2024 - Present",
      location: "Chennai",
      highlights: [
        "Built SaaS renewal dashboards with Next.js SSR, optimizing SEO and load times",
        "Integrated GraphQL for efficient data fetching, reducing redundant API calls",
        "Created reusable component library with React and Tailwind CSS",
        "Implemented CI/CD pipelines using GitHub Actions for automated deployments",
        "Achieved comprehensive test coverage with Jest and Storybook"
      ]
    },
    {
      company: "HappyFox",
      role: "Frontend Engineer",
      period: "Apr 2024 - Oct 2024",
      location: "Chennai",
      highlights: [
        "Improved application performance by 25% through code splitting and lazy loading",
        "Led UI revamp initiative using LESS, implementing 6 distinct product themes",
        "Achieved 90% code coverage with QUnit and Playwright testing",
        "Built features with Ember.js and created RESTful APIs using Django",
        "Implemented real-time data updates using WebSockets"
      ]
    },
    {
      company: "HappyFox",
      role: "Frontend Engineer Intern",
      period: "Sep 2023 - Mar 2024",
      location: "Chennai",
      highlights: [
        "Developed Retain - Subscription Analytics Platform with Django and PostgreSQL",
        "Built ShiftWyse - Shift Scheduling Platform with Slack integration",
        "Utilized ClickHouse for advanced data analytics and optimized data handling",
        "Created dynamic UIs with Next.js, TypeScript, and modern CSS frameworks"
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "CAFE Project",
      period: "Feb 2023 - May 2023",
      location: "Virtual",
      highlights: [
        "Developed reusable file upload component using ReactJS",
        "Created dynamic React component for handling multiple file formats (.csv, .xml, .xlsx)"
      ]
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
          Experience
        </motion.h2>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-3xl md:text-4xl mb-2">{exp.company}</h3>
                  <p className="text-xl text-gray-600 mb-2">{exp.role}</p>
                </div>
                <div className="text-gray-500 md:text-right mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-700 text-lg flex gap-3">
                    <span className="text-gray-400 select-none">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
