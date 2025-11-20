import React, { useState } from "react";
import { 
  FileText, 
  UploadCloud, 
  Image, 
  File, 
  Download, 
  Eye, 
  MoreVertical, 
  Search,
  Filter,
  User,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown
} from "lucide-react";

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const documents = [
    {
      id: 1,
      title: "Vaccination Certificate",
      type: "PDF",
      icon: FileText,
      color: "text-red-600",
      bg: "bg-red-100",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      uploadedBy: "Dr. Sarah Wilson",
      status: "approved",
      category: "Medical",
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Pet Profile Image",
      type: "JPG",
      icon: Image,
      color: "text-blue-600",
      bg: "bg-blue-100",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      uploadedBy: "John Carter",
      status: "approved",
      category: "Profile",
      lastAccessed: "1 day ago"
    },
    {
      id: 3,
      title: "Medical Health Report",
      type: "DOCX",
      icon: File,
      color: "text-green-600",
      bg: "bg-green-100",
      size: "3.1 MB",
      uploadDate: "2024-01-08",
      uploadedBy: "Dr. Mike Chen",
      status: "pending",
      category: "Medical",
      lastAccessed: "1 week ago"
    },
    {
      id: 4,
      title: "Adoption Agreement",
      type: "PDF",
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-100",
      size: "1.2 MB",
      uploadDate: "2024-01-05",
      uploadedBy: "Legal Team",
      status: "approved",
      category: "Legal",
      lastAccessed: "3 days ago"
    },
    {
      id: 5,
      title: "Insurance Policy",
      type: "PDF",
      icon: Shield,
      color: "text-orange-600",
      bg: "bg-orange-100",
      size: "4.5 MB",
      uploadDate: "2024-01-03",
      uploadedBy: "Insurance Co.",
      status: "approved",
      category: "Insurance",
      lastAccessed: "2 weeks ago"
    },
    {
      id: 6,
      title: "Training Certificate",
      type: "PDF",
      icon: FileText,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      size: "1.6 MB",
      uploadDate: "2023-12-28",
      uploadedBy: "Trainer Alex",
      status: "rejected",
      category: "Training",
      lastAccessed: "1 month ago"
    },
    {
      id: 7,
      title: "Pet Gallery Photos",
      type: "ZIP",
      icon: Image,
      color: "text-pink-600",
      bg: "bg-pink-100",
      size: "15.2 MB",
      uploadDate: "2023-12-25",
      uploadedBy: "John Carter",
      status: "approved",
      category: "Gallery",
      lastAccessed: "3 weeks ago"
    },
    {
      id: 8,
      title: "Veterinary Prescription",
      type: "PDF",
      icon: FileText,
      color: "text-teal-600",
      bg: "bg-teal-100",
      size: "0.8 MB",
      uploadDate: "2023-12-20",
      uploadedBy: "Dr. Sarah Wilson",
      status: "approved",
      category: "Medical",
      lastAccessed: "5 days ago"
    }
  ];

  const filters = [
    { id: "all", label: "All Documents", count: documents.length },
    { id: "approved", label: "Approved", count: documents.filter(doc => doc.status === "approved").length },
    { id: "pending", label: "Pending", count: documents.filter(doc => doc.status === "pending").length },
    { id: "rejected", label: "Rejected", count: documents.filter(doc => doc.status === "rejected").length },
  ];

  const stats = [
    { value: documents.length.toString(), label: "Total Documents", icon: FileText, color: "text-blue-600" },
    { value: documents.filter(doc => doc.status === "approved").length.toString(), label: "Approved", icon: CheckCircle, color: "text-green-600" },
    { value: documents.filter(doc => doc.status === "pending").length.toString(), label: "Pending Review", icon: Clock, color: "text-orange-600" },
    { value: "2.8 GB", label: "Total Storage", icon: Shield, color: "text-purple-600" }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || doc.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved": return <CheckCircle size={16} className="text-green-600" />;
      case "pending": return <Clock size={16} className="text-orange-600" />;
      case "rejected": return <XCircle size={16} className="text-red-600" />;
      default: return <Clock size={16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800";
      case "pending": return "bg-orange-100 text-orange-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Documents</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage and view all uploaded pet documents</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto justify-center">
              <UploadCloud size={18} />
              Upload Document
            </button>
          </div>
        </div>

       

        <div className="space-y-6 sm:space-y-8">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-between w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Filter size={16} />
                    Filter Documents
                  </span>
                  <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Filter Buttons */}
              <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        setActiveFilter(filter.id);
                        setShowFilters(false);
                      }}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 text-sm sm:text-base ${
                        activeFilter === filter.id
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        activeFilter === filter.id ? "bg-white/20" : "bg-gray-300"
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                All Documents <span className="text-gray-400">({filteredDocuments.length})</span>
              </h2>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Filter size={16} />
                <span>Sorted by: Recent</span>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredDocuments.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={doc.id}
                    className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:border-blue-300 group"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${doc.bg} group-hover:scale-105 transition-transform duration-200`}>
                            <Icon size={20} className={`${doc.color} sm:size-6`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{doc.title}</h3>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                              <span>{doc.type}</span>
                              <span>•</span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        <button className="p-1 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
                          <MoreVertical size={16} className="text-gray-400" />
                        </button>
                      </div>

                      {/* Document Details */}
                      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Category</span>
                          <span className="font-medium text-gray-900">{doc.category}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Uploaded</span>
                          <span className="font-medium text-gray-900">{formatDate(doc.uploadDate)}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">By</span>
                          <span className="font-medium text-gray-900 flex items-center gap-1">
                            <User size={12} className="sm:size-3" />
                            {doc.uploadedBy}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Last Accessed</span>
                          <span className="font-medium text-gray-900">{doc.lastAccessed}</span>
                        </div>
                      </div>

                      {/* Status and Actions */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                        <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(doc.status)}`}>
                          {getStatusIcon(doc.status)}
                          <span className="hidden sm:inline">
                            {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                          </span>
                          <span className="sm:hidden">
                            {doc.status.charAt(0).toUpperCase() + doc.status.slice(1, 3)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button className="p-1 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors" title="View">
                            <Eye size={14} className="sm:size-4 text-gray-600" />
                          </button>
                          <button className="p-1 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Download">
                            <Download size={14} className="sm:size-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-8 sm:py-12 bg-white rounded-xl sm:rounded-2xl border border-gray-200">
                <FileText size={48} className="sm:size-16 mx-auto text-gray-300 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">No documents found</h3>
                <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}