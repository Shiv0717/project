import React from "react";
import { useParams } from "react-router-dom";
import { User, Calendar } from "lucide-react";

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

        <div className="bg-white  overflow-hidden ">
          {/* Announcement Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
              alt="Announcement" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Announcement Content */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Office Reopening Guidelines
            </h2>
            
            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gray-400" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gray-400" />
                <span>December 15, 2024</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
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
          </div>
        </div>
      </div>
    </div>
  );
}