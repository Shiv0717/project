import React, { useState } from "react";
import { 
  FileText, 
  Image, 
  File, 
  Download, 
  Shield,
  Plus
} from "lucide-react";

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      title: "Vaccination Certificate",
      type: "PDF",
      icon: FileText,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      id: 2,
      title: "Pet Profile Image",
      type: "JPG",
      icon: Image,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      id: 3,
      title: "Medical Health Report",
      type: "DOCX",
      icon: File,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      id: 4,
      title: "Adoption Agreement",
      type: "PDF",
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      id: 5,
      title: "Insurance Policy",
      type: "PDF",
      icon: Shield,
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      id: 6,
      title: "Training Certificate",
      type: "PDF",
      icon: FileText,
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Documents</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage and view all uploaded documents</p>
          </div>
         
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredDocuments.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-blue-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${doc.bg} mb-3 sm:mb-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={`${doc.color} sm:size-8`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 h-12 overflow-hidden leading-relaxed">
  {doc.title}
</h3>
                  
                 
                  
                  {/* Download Button */}
                  <button 
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-medium transition-all duration-200 group-hover:shadow-lg text-sm sm:text-base"
                    title="Download"
                  >
                    <Download size={16} className="sm:size-5" />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl sm:rounded-2xl border border-gray-200">
            <FileText size={48} className="sm:size-16 mx-auto text-gray-300 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">No documents found</h3>
            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}