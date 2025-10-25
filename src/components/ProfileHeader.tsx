import { Mail, MapPin, Phone } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function ProfileHeader() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white">
            <AvatarFallback className="bg-orange-700 text-white text-3xl">RK</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl mb-2">Rhikshitha Kamalakannan</h1>
            <p className="text-orange-100 mb-4">Frontend Engineer</p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Chennai, TamilNadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>rhikshithakannan@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>8754495662</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
