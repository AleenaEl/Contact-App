import { useState, useEffect, useMemo } from "react";

import { motion } from "motion/react";
import { Users, Sparkles } from "lucide-react";
import ContactCard from "../components/ContactCard"
import SearchBar from "../components/SearchBar";
import { LoadingGrid } from "../components/LoadingSkeleton";
import { ContactStats } from "../components/ContactStats";
import { ErrorMessage } from "../components/ErrorMessage";
import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "@/services/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function DashBoard() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
 const {
   data: contacts = [],
   isLoading,
   error,
   refetch,
 } = useQuery({
   queryKey: ["contacts"],
   queryFn: fetchContacts, 
   
 });

  

  const filteredContacts = useMemo(() => {
    if (!searchTerm) return contacts;

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone
          .split(" ")[0]
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  const totalCompanies = useMemo(() => {
    return new Set(contacts.map((contact) => contact.company.name)).size;
  }, [contacts]);
    
     const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
     const paginatedContacts = useMemo(() => {
       const startIndex = (currentPage - 1) * itemsPerPage;
       return filteredContacts.slice(startIndex, startIndex + itemsPerPage);
     }, [filteredContacts, currentPage]);

     const handlePrevious = () => {
       if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
         window.scrollTo({ top: 0, behavior: "smooth" });
       }
     };

     const handleNext = () => {
       if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
         window.scrollTo({ top: 0, behavior: "smooth" });
       }
     };

  if (error) {
    return (
      <div className=" flex items-center justify-center p-4">
        <ErrorMessage message={error} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className=" bg-gray-100">
          
          
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="  px-4 sm:px-6 lg:px-8 py-6 ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Contacts Directory
              </h1>
              <Sparkles className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-gray-600 mb-6">
              Discover and connect with your professional network
            </p>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </motion.div>
        </div>
      </div>

     
      <div className="mx-auto md:mx-[3rem]  px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <LoadingGrid />
        ) : (
          <>
            <ContactStats
              totalContacts={contacts.length}
              filteredContacts={filteredContacts.length}
              totalCompanies={totalCompanies}
              searchTerm={searchTerm}
            />

            {filteredContacts.length === 0 && searchTerm ? (
              <div
                
                className="text-center py-12"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No contacts found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms to find what you're looking
                  for.
                </p>
              </div>
                          ) : (
                                  <>
                                  
              <div
      
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {paginatedContacts.map((contact, index) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    index={index}
                  />
                ))}
                 </div>
             {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={handlePrevious}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink isActive={true}>
                            {currentPage}
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext
                            onClick={handleNext}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
                                  </>
            )}
          </>
        )}
      </div>

     
    </div>
  );
}
