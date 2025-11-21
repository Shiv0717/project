import React from 'react';
import { UserPlus } from 'lucide-react';

const Members = () => {
  // Members data
  const allMembers = [
    {
      id: 1,
      name: "Michael Chen",
      email: "michael@example.com",
      phone: "+1 (202) 555-0147",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1 (202) 555-0123",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "David Wilson",
      email: "david@example.com",
      phone: "+1 (202) 555-0198",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      email: "emma@example.com",
      phone: "+1 (202) 555-0176",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    }
  ];

  // Team members data
  const teamMembers = [
    {
      id: 5,
      name: "Alex Kumar",
      email: "alex@example.com",
      phone: "+1 (202) 555-0134",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Maria Garcia",
      email: "maria@example.com",
      phone: "+1 (202) 555-0156",
      image: "https://images.unsplash.com/photo-1551836026-d5c88ac5d691?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "James Wilson",
      email: "james.w@example.com",
      phone: "+1 (202) 555-0167",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Lisa Wang",
      email: "lisa@example.com",
      phone: "+1 (202) 555-0189",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Members</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage your team members and departments</p>
          </div>
          
        </div>

        {/* Team Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Team</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 group text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 sm:border-4 border-gray-100 group-hover:border-blue-100 transition-colors duration-300"
                />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{member.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* All Members Section */}
        <section>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">All Members</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {allMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 group text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 sm:border-4 border-gray-100 group-hover:border-blue-100 transition-colors duration-300"
                />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">{member.email}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{member.phone}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Members;