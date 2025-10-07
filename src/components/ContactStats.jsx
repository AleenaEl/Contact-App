import { Card, CardContent } from "./ui/card";
import { Users, Search, Building, Globe } from "lucide-react";
import { motion } from "motion/react";

export function ContactStats({
  totalContacts,
  filteredContacts,
  totalCompanies,
  searchTerm,
}) {
  const stats = [
    {
      icon: Users,
      label: "Total Contacts",
      value: totalContacts,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Search,
      label: searchTerm ? "Found" : "Showing",
      value: filteredContacts,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Building,
      label: "Companies",
      value: totalCompanies,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Globe,
      label: "Countries",
      value:  "Global", 
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1,}}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
