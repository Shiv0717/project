import React, { useState } from "react";
import { Dog, PawPrint, ChevronRight, Search, Filter, Plus, Heart, MapPin, Calendar, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Sample pets data
  const pets = [
    {
      id: 1,
      name: "Max",
      type: "dog",
      category: "domestic",
      breed: "Golden Retriever",
      age: "2 years",
      location: "New York",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80",
      status: "Available",
      likes: 42
    },
    {
      id: 2,
      name: "Luna",
      type: "cat",
      category: "domestic",
      breed: "Siamese",
      age: "1.5 years",
      location: "Los Angeles",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80",
      status: "Adopted",
      likes: 28
    },
    {
      id: 3,
      name: "Rocky",
      type: "dog",
      category: "domestic",
      breed: "German Shepherd",
      age: "3 years",
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80",
      status: "Available",
      likes: 35
    },
    {
      id: 4,
      name: "Bella",
      type: "bird",
      category: "wildlife",
      breed: "Macaw",
      age: "4 years",
      location: "Miami",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=500&q=80",
      status: "Available",
      likes: 19
    },
    {
      id: 5,
      name: "Charlie",
      type: "rabbit",
      category: "domestic",
      breed: "Holland Lop",
      age: "8 months",
      location: "Seattle",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=500&q=80",
      status: "Available",
      likes: 31
    },
    {
      id: 6,
      name: "Simba",
      type: "wild",
      category: "wildlife",
      breed: "Bengal Tiger",
      age: "5 years",
      location: "San Diego Zoo",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=500&q=80",
      status: "Protected",
      likes: 67
    }
  ];

  const filters = [
    { id: "all", label: "All Pets", count: pets.length },
    { id: "domestic", label: "Domestic", count: pets.filter(pet => pet.category === "domestic").length },
    { id: "wildlife", label: "Wildlife", count: pets.filter(pet => pet.category === "wildlife").length },
    { id: "available", label: "Available", count: pets.filter(pet => pet.status === "Available").length },
  ];

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || 
                         pet.category === activeFilter || 
                         pet.status.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "Adopted": return "bg-blue-100 text-blue-800";
      case "Protected": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type) => {
    return type === "wild" ? PawPrint : Dog;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Pets Directory
            </h1>
            <p className="text-slate-500 mt-1 sm:mt-2 text-sm sm:text-md">Discover and manage all pets in our community</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 w-full lg:w-auto justify-center text-sm sm:text-base">
            <Plus size={18} />
            Add New Pet
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search pets by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full p-3 bg-slate-50 border border-slate-200 rounded-lg"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Filter size={16} />
                  Filter Pets
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
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeFilter === filter.id ? "bg-white/20" : "bg-slate-300"
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Domestic Card */}
          <Link
            to="/pets/domestic"
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-2xl bg-white shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <Dog size={24} className="sm:size-8 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 group-hover:text-slate-900 mb-1 sm:mb-2 line-clamp-2">
                  Domestic Pets
                </h2>
                <p className="text-slate-600 mb-2 sm:mb-3 text-xs sm:text-sm">Household companions and family pets</p>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
                  <span>Family friendly</span>
                </div>
              </div>
              <ChevronRight size={20} className="sm:size-6 text-blue-600 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
            </div>
          </Link>

          {/* Wildlife Card */}
          <Link
            to="/pets/wildlife"
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-2xl bg-white shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <PawPrint size={24} className="sm:size-8 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 group-hover:text-slate-900 mb-1 sm:mb-2 line-clamp-2">
                  Wildlife
                </h2>
                <p className="text-slate-600 mb-2 sm:mb-3 text-xs sm:text-sm">Wild animals and conservation</p>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
                  <span>Protected species</span>
                </div>
              </div>
              <ChevronRight size={20} className="sm:size-6 text-amber-600 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
            </div>
          </Link>
        </div>

        {/* Pets Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              All Pets <span className="text-slate-400">({filteredPets.length})</span>
            </h2>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Filter size={16} />
              <span>Sorted by: Most Popular</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPets.map((pet) => {
              const TypeIcon = getTypeIcon(pet.type);
              return (
                <div
                  key={pet.id}
                  className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group"
                >
                  {/* Pet Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Heart size={14} className="sm:size-4 text-red-500" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{pet.likes}</span>
                    </div>
                    <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(pet.status)}`}>
                      {pet.status}
                    </div>
                  </div>

                  {/* Pet Info */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 line-clamp-1">{pet.name}</h3>
                        <p className="text-slate-600 text-sm sm:text-base line-clamp-1">{pet.breed}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-blue-100 transition-colors flex-shrink-0 ml-3">
                        <TypeIcon size={18} className="sm:size-5 text-slate-600 group-hover:text-blue-600" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <Calendar size={14} className="sm:size-4" />
                        <span>{pet.age}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <MapPin size={14} className="sm:size-4" />
                        <span className="line-clamp-1">{pet.location}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 hover:shadow-lg text-sm sm:text-base">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPets.length === 0 && (
            <div className="text-center py-8 sm:py-12 bg-white rounded-xl sm:rounded-2xl border border-slate-200">
              <Dog size={48} className="sm:size-16 mx-auto text-slate-300 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-600 mb-1 sm:mb-2">No pets found</h3>
              <p className="text-slate-500 text-sm sm:text-base">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}