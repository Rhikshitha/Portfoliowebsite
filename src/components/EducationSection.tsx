import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <GraduationCap className="h-6 w-6 text-orange-600" />
        Education
      </h2>
      <div className="border-l-4 border-orange-500 pl-6 py-2">
        <h3 className="text-xl mb-1">Rajalakshmi Engineering College</h3>
        <p className="text-gray-700 mb-2">B.E - Computer Science and Engineering</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
          <span>Chennai</span>
          <span>Graduated: May 2024</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
          <span>CGPA: 9.58</span>
        </div>
      </div>
    </div>
  );
}
