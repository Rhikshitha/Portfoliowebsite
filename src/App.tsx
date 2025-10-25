import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsShowcase } from "./components/SkillsShowcase";
import { AchievementsShowcase } from "./components/AchievementsShowcase";
import { EducationShowcase } from "./components/EducationShowcase";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsShowcase />
      <EducationShowcase />
      <AchievementsShowcase />
      
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              Open to new opportunities and collaborations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-400">
              <a 
                href="mailto:rhikshithakannan@gmail.com" 
                className="hover:text-white transition-colors"
              >
                rhikshithakannan@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <span>8754495662</span>
              <span className="hidden sm:inline">•</span>
              <span>Chennai, India</span>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            © 2025 Rhikshitha Kamalakannan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
