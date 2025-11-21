import React, { useState } from "react";
import {
  Dog,
  Plus,
} from "lucide-react";

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
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Luna",
      type: "cat",
      category: "domestic",
      breed: "Siamese",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Rocky",
      type: "dog",
      category: "domestic",
      breed: "German Shepherd",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Bella",
      type: "bird",
      category: "wildlife",
      breed: "Macaw",
      image:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Charlie",
      type: "rabbit",
      category: "domestic",
      breed: "Holland Lop",
      image:
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Simba",
      type: "wild",
      category: "wildlife",
      breed: "Bengal Tiger",
      image:
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const filters = [
    { id: "all", label: "All Pets" },
    { id: "domestic", label: "Domestic" },
    { id: "wildlife", label: "Wildlife" },
  ];

  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || pet.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Page Header with Border */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">Pets Directory</h1>
            <p className="text-slate-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Discover and manage all pets in our community
            </p>
          </div>
         
        </div>

        {/* Filters with Border */}
        <div className="flex gap-2 pb-4 sm:pb-6 ">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base border ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg border-blue-700"
                  : "bg-white text-gray-600 hover:bg-gray-100 border-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group hover:border-blue-300"
            >
              {/* Pet Image */}
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden border-b border-gray-100">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Pet Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2 border-b border-gray-100 pb-2">
                      {pet.name}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {pet.breed}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl sm:rounded-2xl border border-gray-200">
            <Dog size={48} className="sm:size-16 mx-auto text-slate-300 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 mb-1 sm:mb-2">
              No pets found
            </h3>
            <p className="text-slate-500 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}