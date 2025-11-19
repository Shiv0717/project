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
  Calendar,
  User,
  Shield,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

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

  const categories = [...new Set(documents.map(doc => doc.category))];

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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
            <p className="text-gray-600 mt-2">Manage and view all uploaded pet documents</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              <UploadCloud size={18} />
              Upload Document
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search and Filter Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search documents by title or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                {/* Filter Buttons */}
                <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                        activeFilter === filter.id
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className={`text-sm px-1.5 py-0.5 rounded-full ${
                        activeFilter === filter.id ? "bg-white/20" : "bg-gray-300"
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Documents <span className="text-gray-400">({filteredDocuments.length})</span>
                </h2>
                <div className="flex items-center gap-2 text-gray-500">
                  <Filter size={18} />
                  <span className="text-sm">Sorted by: Recent</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDocuments.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={doc.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 group"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${doc.bg} group-hover:scale-105 transition-transform duration-200`}>
                              <Icon size={24} className={doc.color} />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{doc.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span>{doc.type}</span>
                                <span>•</span>
                                <span>{doc.size}</span>
                              </div>
                            </div>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <MoreVertical size={16} className="text-gray-400" />
                          </button>
                        </div>

                        {/* Document Details */}
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Category</span>
                            <span className="font-medium text-gray-900">{doc.category}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Uploaded</span>
                            <span className="font-medium text-gray-900">{formatDate(doc.uploadDate)}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">By</span>
                            <span className="font-medium text-gray-900 flex items-center gap-1">
                              <User size={14} />
                              {doc.uploadedBy}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Last Accessed</span>
                            <span className="font-medium text-gray-900">{doc.lastAccessed}</span>
                          </div>
                        </div>

                        {/* Status and Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(doc.status)}`}>
                            {getStatusIcon(doc.status)}
                            {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="View">
                              <Eye size={16} className="text-gray-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Download">
                              <Download size={16} className="text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredDocuments.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                  <FileText size={64} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No documents found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}