import { Input } from "./ui/input";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";

 function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2  text-gray-400 w-4 h-4" />
      <Input
        type="text"
        placeholder="Search by name, phone, company, or email..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-10 bg-white backdrop-blur-sm border-gray-200 "
      />
      {searchTerm && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSearchChange("")}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 hover:bg-gray-100"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
export default SearchBar