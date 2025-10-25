import { motion } from "motion/react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "AuthentixTrustify",
      description: "Document Processing and Verification using Deep Learning",
      technologies: ["CNN", "RNN", "LSTM", "Deep Learning"],
      highlights: [
        "Integrated CNN and RNN for robust feature extraction and analysis",
        "Implemented custom deep neural network architecture with multi-layered LSTM",
        "Ensured high accuracy in verification processes for complex document structures"
      ]
    },
    {
      title: "Movie Recommendation System",
      description: "ML-Powered Recommendations with Sentiment Analysis",
      technologies: ["Machine Learning", "SVM", "Python", "NLP"],
      highlights: [
        "Trained SVM model with 63K records achieving 96.54% accuracy",
        "Implemented sentiment analysis on movie reviews",
        "Used cosine similarity for recommendations across 20,000+ movies"
      ]
    },
    {
      title: "myHealth",
      description: "Unified Platform for Health Records",
      technologies: ["Node.js", "HTML", "CSS", "Bootstrap"],
      highlights: [
        "Created centralized platform for patient health records",
        "Maintains complete medical history across multiple hospitals",
        "Stores prescription details and diagnosis for each visit"
      ]
    },
    {
      title: "YouTube Video Translator",
      description: "Automated Video Translation Tool",
      technologies: ["Python", "Tkinter", "Audio Processing"],
      highlights: [
        "Built GUI-based application for video translation",
        "Translates video content to English",
        "Merges translated audio with original video in MP4 format"
      ]
    }
  ];

  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl text-center mb-20"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl md:text-3xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-700 text-sm flex gap-2">
                    <span className="text-gray-400">•</span>
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
