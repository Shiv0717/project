import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Mail, 
  Phone, 
  MessageCircle, 
  Download,
  Users,
  Calendar,
  Building,
  Activity
} from 'lucide-react';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Members data
  const members = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Frontend Developer",
      email: "michael@example.com",
      phone: "+1 (202) 555-0147",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      email: "sarah@example.com",
      phone: "+1 (202) 555-0123",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-orange-500"
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Backend Developer",
      email: "david@example.com",
      phone: "+1 (202) 555-0198",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Marketing Director",
      email: "emma@example.com",
      phone: "+1 (202) 555-0176",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-blue-500"
    },
    {
      id: 5,
      name: "James Thompson",
      role: "Data Scientist",
      email: "james@example.com",
      phone: "+1 (202) 555-0165",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-green-500"
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "UX Designer",
      email: "lisa@example.com",
      phone: "+1 (202) 555-0189",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-orange-500"
    }
  ];

  const recentContacts = [
    {
      id: 1,
      name: "Daniel Kim",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Emma Johnson",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const stats = [
    { value: "124", label: "Total Contacts", icon: Users },
    { value: "28", label: "This Month", icon: Calendar },
    { value: "6", label: "Departments", icon: Building },
    { value: "94%", label: "Active", icon: Activity }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-bold text-gray-900">Members</h1>
            <p className="text-gray-600 mt-2">Manage your team members and contacts</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              <UserPlus size={18} />
              Add Members
            </button>
            
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
           
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {filteredMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-4 border-gray-100 mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  
                    
                    <div className="w-full space-y-4 mb-6">
                      <div className="flex items-center gap-3 p-3 border-b border-gray-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Mail size={18} className="text-blue-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="text-sm font-medium text-gray-900">{member.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Phone size={18} className="text-green-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="text-sm font-medium text-gray-900">{member.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className={`w-full flex items-center justify-center gap-2 ${member.cardColor} hover:${member.cardColor.replace('500', '600')} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}>
                      <MessageCircle size={18} />
                      Contact {member.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Members;