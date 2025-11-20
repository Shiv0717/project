import React from "react";
import { 
  Plus, 
  ArrowRight, 
  Users, 
  Heart,
  Eye,
  FileText
} from "lucide-react";

const Announcements = () => {
  // Announcements data
  const mainAnnouncements = [
    {
      id: 1,
      title: "How Do We Choose Our Political Leaders?",
      description: "Wherever you might live, election time takes over everything — airwaves, billboards, and conversations. Let's explore how political campaigns shape our choices.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
      tag: "Leadership",
      tagColor: "bg-blue-500",
      author: {
        name: "John Carter",
        initials: "JC",
        avatarColor: "bg-blue-500",
        date: "Sep 12, 2023"
      }
    },
    {
      id: 2,
      title: "Is Social Media the Bad Guy?",
      description: "We're living in an age of hyper-connectivity. It's connected people from all corners of the planet and given us new ways to share — but also challenges to face.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      tag: "Technology",
      tagColor: "bg-green-500",
      author: {
        name: "Selene Shenoy",
        initials: "SS",
        avatarColor: "bg-green-500",
        date: "Sep 8, 2023"
      }
    },
    {
      id: 3,
      title: "How Team Collaboration Boosts Productivity",
      description: "A look at how cross-department collaboration and open communication can transform workplace efficiency.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      tag: "Productivity",
      tagColor: "bg-purple-500",
      author: {
        name: "Jaya Desai",
        initials: "JD",
        avatarColor: "bg-purple-500",
        date: "Sep 5, 2023"
      }
    },
    {
      id: 4,
      title: "The Importance of Mental Health in the Workplace",
      description: "Mental well-being is just as important as productivity. Learn how organizations can create better support systems for employees.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
      tag: "Wellness",
      tagColor: "bg-orange-500",
      author: {
        name: "Michael Kaplan",
        initials: "MK",
        avatarColor: "bg-orange-500",
        date: "Aug 28, 2023"
      }
    }
  ];

  const recentAnnouncements = [
    {
      id: 1,
      title: "Office reopening guidelines",
      department: "HR",
      avatarColor: "bg-pink-500",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "New software licenses available",
      department: "IT",
      avatarColor: "bg-blue-500",
      date: "5 days ago"
    },
    {
      id: 3,
      title: "Quarterly budget updates",
      department: "FN",
      avatarColor: "bg-green-500",
      date: "1 week ago"
    },
    {
      id: 4,
      title: "Upcoming company events",
      department: "MK",
      avatarColor: "bg-orange-500",
      date: "2 weeks ago"
    }
  ];

 
  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-6">
      <div className="">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Feed</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Stay updated with the latest news and updates</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base">
              <Plus size={18} />
              New Post
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-4">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {mainAnnouncements.map((announcement) => (
              <div 
                key={announcement.id} 
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:border-blue-300"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={announcement.image} 
                    alt={announcement.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${announcement.tagColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                    {announcement.tag}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">
                    {announcement.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`${announcement.author.avatarColor} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base`}>
                        {announcement.author.initials}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">{announcement.author.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{announcement.author.date}</p>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-fit text-sm sm:text-base">
                      <ArrowRight size={14} className="sm:size-4" />
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - 1/3 width on large screens, full width on mobile */}
          <div className="space-y-4 sm:space-y-6">
            {/* Recent Announcements */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Announcements</h2>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
                  View all
                </a>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {recentAnnouncements.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-start gap-3 sm:gap-4 py-3 px-2 rounded-lg sm:rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className={`${item.avatarColor} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-semibold shrink-0 text-sm`}>
                      {item.department}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;