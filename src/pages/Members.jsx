import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Mail, 
  Phone, 
  MessageCircle, 
  Users,
  Calendar,
  Building,
  Activity,
  ChevronDown,
  Shield,
  Crown,
  UserCheck,
  MoreVertical
} from 'lucide-react';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('members');
  const [showFilters, setShowFilters] = useState(false);
  
  // All Members data
  const allMembers = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Frontend Developer",
      email: "michael@example.com",
      phone: "+1 (202) 555-0147",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-green-500",
      department: "Engineering",
      joinDate: "2023-01-15",
      status: "active",
      team: "Engineering Team",
      isTeamLead: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      email: "sarah@example.com",
      phone: "+1 (202) 555-0123",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-orange-500",
      department: "Product",
      joinDate: "2022-08-20",
      status: "active",
      team: "Engineering Team",
      isTeamLead: true
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Backend Developer",
      email: "david@example.com",
      phone: "+1 (202) 555-0198",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-purple-500",
      department: "Engineering",
      joinDate: "2023-03-10",
      status: "active",
      team: "Engineering Team",
      isTeamLead: false
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Marketing Director",
      email: "emma@example.com",
      phone: "+1 (202) 555-0176",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-blue-500",
      department: "Marketing",
      joinDate: "2021-11-05",
      status: "active",
      team: "Engineering Team",
      isTeamLead: true
    },
    {
      id: 5,
      name: "James Thompson",
      role: "Data Scientist",
      email: "james@example.com",
      phone: "+1 (202) 555-0165",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-green-500",
      department: "Data Science",
      joinDate: "2023-02-28",
      status: "active",
      team: "Engineering Team",
      isTeamLead: false
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "UX Designer",
      email: "lisa@example.com",
      phone: "+1 (202) 555-0189",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-orange-500",
      department: "Design",
      joinDate: "2022-12-15",
      status: "active",
      team: "Engineering Team",
      isTeamLead: true
    },
    {
      id: 7,
      name: "Alex Kumar",
      role: "Full Stack Developer",
      email: "alex@example.com",
      phone: "+1 (202) 555-0134",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-blue-500",
      department: "Engineering",
      joinDate: "2023-04-10",
      status: "active",
      team: "Engineering Team",
      isTeamLead: false
    },
    {
      id: 8,
      name: "Maria Garcia",
      role: "DevOps Engineer",
      email: "maria@example.com",
      phone: "+1 (202) 555-0156",
      image: "https://images.unsplash.com/photo-1551836026-d5c88ac5d691?auto=format&fit=crop&w=500&q=80",
      cardColor: "bg-purple-500",
      department: "Engineering",
      joinDate: "2023-01-20",
      status: "active",
      team: "Engineering Team",
      isTeamLead: false
    },
    
  ];

  // Get unique teams
  const teams = [...new Set(allMembers.map(member => member.team))];

  const stats = [
    { value: allMembers.length.toString(), label: "Total Members", icon: Users, color: "text-blue-600" },
    { value: "28", label: "This Month", icon: Calendar, color: "text-green-600" },
    { value: teams.length.toString(), label: "Teams", icon: Building, color: "text-purple-600" },
    { value: "94%", label: "Active", icon: Activity, color: "text-orange-600" }
  ];

  // Filter members based on active tab and search
  const getFilteredMembers = () => {
    let filtered = allMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm) ||
      member.team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (activeTab === 'teams') {
      // Group by team for teams tab
      const groupedByTeam = {};
      filtered.forEach(member => {
        if (!groupedByTeam[member.team]) {
          groupedByTeam[member.team] = [];
        }
        groupedByTeam[member.team].push(member);
      });
      return groupedByTeam;
    }

    return filtered;
  };

  const filteredData = getFilteredMembers();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Team Management</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage your team members and departments</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto justify-center">
              <UserPlus size={18} />
              Add Member
            </button>
          </div>
        </div>

       

        {/* Tabs */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-1 mb-6 sm:mb-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab('members')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeTab === 'members'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Members
            </button>
            <button
              onClick={() => setActiveTab('teams')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeTab === 'teams'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
               Team
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={activeTab === 'members' ? "Search members by name, email, or team..." : "Search teams or members..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'members' ? (
          /* All Members Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {Array.isArray(filteredData) && filteredData.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          /* Teams View - Grouped by Team */
          <div className="space-y-6 ">
            {Object.keys(filteredData).map((teamName) => (
              <div key={teamName} className="rounded-xl overflow-hidden">
               
                {/* Team Members Grid */}
                <div className="">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {filteredData[teamName].map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty States */}
        {(activeTab === 'members' && Array.isArray(filteredData) && filteredData.length === 0) || 
         (activeTab === 'teams' && Object.keys(filteredData).length === 0) && (
          <div className="text-center py-8 sm:py-12 bg-white rounded-xl sm:rounded-2xl border border-gray-200">
            <Users size={48} className="sm:size-16 mx-auto text-gray-300 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">
              {activeTab === 'members' ? 'No members found' : 'No teams found'}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Member Card Component
const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-gray-100 object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white">
            <UserCheck size={12} className="text-white" />
          </div>
          {member.isTeamLead && (
            <div className="absolute -top-1 -left-1 bg-amber-500 rounded-full p-1 border-2 border-white">
              <Crown size={12} className="text-white" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      

        <div className="w-full space-y-3 mb-4">
          <div className="flex items-center gap-3 p-3 border-b border-gray-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail size={16} className="text-blue-600" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-900 truncate">{member.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone size={16} className="text-green-600" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium text-gray-900">{member.phone}</p>
            </div>
          </div>

        </div>
        
        <div className="flex items-center gap-2 w-full">
          <button className={`flex-1 flex items-center justify-center gap-2 ${member.cardColor} hover:opacity-90 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg text-sm sm:text-base`}>
            <MessageCircle size={16} />
            Contact
          </button>
          <button className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <MoreVertical size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;