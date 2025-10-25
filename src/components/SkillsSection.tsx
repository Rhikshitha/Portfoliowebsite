import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skills = [
    "ReactJS", "NextJS", "JavaScript", "TypeScript", "Docker", "Git", 
    "GraphQL", "Python", "Django", "NodeJS", "Java", "MySQL", 
    "PostgreSQL", "HTML", "CSS", "Ember.js", "SASS", "Tailwind CSS",
    "ClickHouse", "WebSockets", "Jest", "Playwright", "QUnit", "Storybook"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <span className="text-orange-600">⚡</span> Skills & Technologies
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="px-3 py-1.5 bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
