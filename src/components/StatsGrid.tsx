import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

export function StatsGrid() {
  const stats = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "2+ Years",
      label: "Experience",
      color: "text-orange-600"
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: "15+",
      label: "Skills",
      color: "text-blue-600"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      value: "9.58",
      label: "CGPA",
      color: "text-green-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "4+",
      label: "Awards",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto -mt-8 mb-8 px-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div className={`${stat.color} flex justify-center mb-2`}>
            {stat.icon}
          </div>
          <div className="text-2xl mb-1">{stat.value}</div>
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
