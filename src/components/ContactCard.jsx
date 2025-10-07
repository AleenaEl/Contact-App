import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
  User,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function ContactCard({ contact, index }) {
    const navigate=useNavigate()
    const handleContactDets = () => {
        navigate(`/details`, {
        state:{contact}
    })
    }
    
    const handleEmailClick = (e) => {
      e.stopPropagation(); 
    };

    const handleWebsiteClick = (e) => {
      e.stopPropagation(); 
    };
const formatPhone = (phone) => {
  if (!phone) return "";
  const phonePart = phone.split(" ")[0]; 
  return phonePart.replace(/\./g, "-"); 
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card
        onClick={() => handleContactDets(contact)}
        className=" relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer"
      >
        <div className={`h-16 bg-gray-200 relative`}>
          {/* <div className="absolute inset-0 bg-black/10"></div> */}
          <div className="absolute top-6 left-24">
            <Badge variant="secondary" className="mt-1">
              @{contact.username}
            </Badge>
          </div>
          <div className="absolute -bottom-6 left-6">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center ">
              <User className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>

        <CardContent className=" p-6 ">
          <div className="space-y-4">
            <div className="pt-2">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                {contact.name}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{contact.email}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-sm">{formatPhone(contact.phone)}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <Globe className="w-4 h-4 text-purple-500" />
                <span className="text-sm">{contact.website}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm">
                  {contact.address.street}, {contact.address.city}
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <Building className="w-4 h-4 text-orange-500" />
                <span className="text-sm">{contact.company.name}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-300">
              <p className="text-xs text-gray-500 italic">
                "{contact.company.catchPhrase}"
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 hover:bg-gray-50"
                onClick={handleEmailClick}
              >
                <Mail className="w-3 h-3 mr-2" />
                Email
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 hover:bg-gray-50"
                onClick={handleWebsiteClick}
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                Website
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ContactCard
