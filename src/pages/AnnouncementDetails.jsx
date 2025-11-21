import React from "react";
import { useParams } from "react-router-dom";
import { User, Calendar, Clock, Building } from "lucide-react";

export default function AnnouncementDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Announcement Details</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">View complete announcement information</p>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Announcement Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
              alt="Announcement" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Announcement Content */}
          <div className="p-6 sm:p-8">
            
            
            <div className="prose max-w-none text-gray-600 space-y-4 text-sm sm:text-base">
              <p>
                We are pleased to announce that our office will be reopening starting next Monday, 
                with new health and safety guidelines in place to ensure the well-being of all employees.
              </p>
              
              <p>
                All employees are required to follow the updated protocols, including mandatory mask-wearing 
                in common areas, regular temperature checks, and maintaining social distancing in workspaces.
              </p>

              <p>
                The office will operate at 50% capacity initially, with a rotating schedule for teams. 
                Please check your email for your assigned workdays and review the complete safety guidelines 
                document attached below.
              </p>

              <p>
                We appreciate your cooperation and look forward to welcoming everyone back safely.
              </p>
            </div>

            {/* Additional Info with Icons */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-blue-900 uppercase tracking-wide">Posted By</h3>
                    <p className="text-sm font-medium text-blue-700">Sarah Johnson</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-green-900 uppercase tracking-wide">Date Posted</h3>
                    <p className="text-sm font-medium text-green-700">Dec 15, 2024</p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}