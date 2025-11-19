import React, { useState } from "react";
import { Dog, PawPrint, ChevronRight, Search, Filter, Plus, Heart, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

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
    <div className="max-w-7xl mx-auto space-y-8 p-6 bg-gray-50 ">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black ">
            Pets Directory
          </h1>
          <p className="text-slate-500 mt-2 text-md">Discover and manage all pets in our community</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 mt-4 lg:mt-0">
          <Plus size={20} />
          Add New Pet
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search pets by name or breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-sm px-1.5 py-0.5 rounded-full ${
                  activeFilter === filter.id ? "bg-white/20" : "bg-slate-300"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Domestic Card */}
        <Link
          to="/pets/domestic"
          className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
        >
          <div className="flex items-center gap-6">
            <div className="p-5 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Dog size={32} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 mb-2">
                Domestic Pets
              </h2>
              <p className="text-slate-600 mb-3">Household companions and family pets</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>Family friendly</span>
              </div>
            </div>
            <ChevronRight size={24} className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </Link>

        {/* Wildlife Card */}
        <Link
          to="/pets/wildlife"
          className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
        >
          <div className="flex items-center gap-6">
            <div className="p-5 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <PawPrint size={32} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 mb-2">
                Wildlife
              </h2>
              <p className="text-slate-600 mb-3">Wild animals and conservation</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>Protected species</span>
              </div>
            </div>
            <ChevronRight size={24} className="text-amber-600 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </Link>
      </div>

      {/* Pets Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            All Pets <span className="text-slate-400">({filteredPets.length})</span>
          </h2>
          <div className="flex items-center gap-2 text-slate-500">
            <Filter size={18} />
            <span className="text-sm">Sorted by: Most Popular</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredPets.map((pet) => {
            const TypeIcon = getTypeIcon(pet.type);
            return (
              <div
                key={pet.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Pet Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-sm font-medium text-slate-700">{pet.likes}</span>
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(pet.status)}`}>
                    {pet.status}
                  </div>
                </div>

                {/* Pet Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{pet.name}</h3>
                      <p className="text-slate-600">{pet.breed}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-blue-100 transition-colors">
                      <TypeIcon size={20} className="text-slate-600 group-hover:text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={16} />
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin size={16} />
                      <span>{pet.location}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <Dog size={64} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No pets found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}