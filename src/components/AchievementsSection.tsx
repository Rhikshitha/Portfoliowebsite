import { Trophy } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      title: "Hack-a-bot Winner",
      description: "Secured 1st place in RPA Hackathon organized by UiPath",
      icon: "🥇"
    },
    {
      title: "National Coding Contest",
      description: "Secured 3rd place in National Coding Contest 2023 by CSI",
      icon: "🥉"
    },
    {
      title: "Department Topper",
      description: "Top performer in department during 2nd and 5th semester",
      icon: "🏆"
    },
    {
      title: "RPA Coursework Award",
      description: "3rd place in department-wide RPA coursework",
      icon: "🎯"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <Trophy className="h-6 w-6 text-orange-600" />
        Achievements & Awards
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">{achievement.icon}</span>
              <div>
                <h3 className="mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
