import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
  User,
  ExternalLink,
  MessageCircle,
  Calendar,
  Star,
  Share2,
} from "lucide-react";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";

 function ContactDetails() {
    const location = useLocation();
    const contact = location.state?.contact;
const navigate =useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto p-5 md:pt-14"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden border shadow-xl bg-white/90 backdrop-blur-sm">
            <div className={`h-20 relative bg-gray-100`}>
              <div className="absolute  top-10 left-32">
                <Badge variant="secondary" className="text-sm">
                  @{contact.username}
                </Badge>
              </div>
              <div className="absolute  top-0 left-2">
                <Button className="mb-4 " onClick={() => navigate("/")}>
                  <ArrowLeft className="w-8 h-8 " />
                </Button>
              </div>
              <div className="absolute -bottom-14 left-8">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-8 border-white">
                  <User className="w-12 h-12 text-gray-600" />
                </div>
              </div>
            </div>

            <CardContent className=" p-8">
              <div className="space-y-4">
                <div className="pt-12">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {contact.name}
                  </h1>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Email</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {contact.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Phone</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {contact.phone.split(" ")[0]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Website</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {contact.website}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Location</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {contact.address.city}, {contact.address.zipcode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">
                    Full Address
                  </h3>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-gray-900 text-sm">
                      {contact.address.suite} {contact.address.street}
                    </p>
                    <p className="text-gray-900 text-sm">
                      {contact.address.city}, {contact.address.zipcode}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 ">
                      Coordinates: {contact.address.geo.lat},{" "}
                      {contact.address.geo.lng}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border shadow-xl bg-white backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Company</h3>
                  <p className="text-sm text-gray-600">Professional Details</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 text-lg">
                    {contact.company.name}
                  </p>
                  <p className="text-sm text-gray-600 italic mt-2">
                    "{contact.company.catchPhrase}"
                  </p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-gray-600 mb-1">Business Focus</p>
                  <p className="text-sm text-gray-800">{contact.company.bs}</p>
                </div>
              </div>
            </CardContent>
          </Card>

    
          <Card className="border shadow-xl bg-white/90 ">
            <CardHeader>
              <h3 className="font-semibold text-gray-900">Quick Actions</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">

                <Button
                  variant="outline"
                  className="w-full justify-start hover:bg-gray-50"
                >
                  <ExternalLink className="w-4 h-4 mr-3" />
                  Visit Website
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
export default ContactDetails