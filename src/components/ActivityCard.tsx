import { Calendar, MapPin } from "lucide-react";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  description: string[];
  type: "experience" | "project";
}

export function ActivityCard({ title, subtitle, location, period, description, type }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-orange-500">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-gray-700 mb-2">{subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs ${
          type === "experience" 
            ? "bg-orange-100 text-orange-700" 
            : "bg-blue-100 text-blue-700"
        }`}>
          {type === "experience" ? "Work" : "Project"}
        </div>
      </div>
      
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 text-sm flex gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
