import React, { useState } from "react";
import { 
  Plus, 
  ArrowRight, 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark,
  MoreHorizontal,
  Image,
  Video,
  Calendar,
  Eye,
  Users
} from "lucide-react";

const Announcements = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());

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
        date: "Sep 12, 2023",
        role: "Political Analyst",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
      },
      likes: 42,
      comments: 8,
      shares: 3,
      views: 1250
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
        date: "Sep 8, 2023",
        role: "Tech Writer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80"
      },
      likes: 28,
      comments: 12,
      shares: 5,
      views: 890
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
        date: "Sep 5, 2023",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
      },
      likes: 35,
      comments: 6,
      shares: 2,
      views: 1100
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
        date: "Aug 28, 2023",
        role: "HR Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
      },
      likes: 67,
      comments: 15,
      shares: 8,
      views: 2100
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

  const handleLike = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const handleSave = (postId) => {
    const newSavedPosts = new Set(savedPosts);
    if (newSavedPosts.has(postId)) {
      newSavedPosts.delete(postId);
    } else {
      newSavedPosts.add(postId);
    }
    setSavedPosts(newSavedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-2">
          {/* Main Content - 60% width (3/5) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Create Post Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                  alt="Your profile"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <button className="flex-1 text-left p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  Start a post...
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="flex items-center gap-2 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <Image size={20} className="text-blue-500" />
                    <span className="text-sm text-gray-600 hidden sm:block">Photo</span>
                  </button>
                  <button className="flex items-center gap-2 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <Video size={20} className="text-green-500" />
                    <span className="text-sm text-gray-600 hidden sm:block">Video</span>
                  </button>
                  <button className="flex items-center gap-2 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <Calendar size={20} className="text-orange-500" />
                    <span className="text-sm text-gray-600 hidden sm:block">Event</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Posts */}
            {mainAnnouncements.map((announcement) => (
              <div 
                key={announcement.id} 
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl"
              >
                {/* Author Header */}
                <div className="p-4 sm:p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={announcement.author.avatar}
                        alt={announcement.author.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {announcement.author.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{announcement.author.role}</p>
                        <p className="text-gray-500 text-xs mt-1">{announcement.author.date} • <Eye size={12} className="inline mr-1" /> {announcement.views} views</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal size={20} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <span className={`inline-block ${announcement.tagColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mb-2`}>
                      {announcement.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {announcement.description}
                    </p>
                  </div>

                  {/* Post Image */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-4">
                    <img 
                      src={announcement.image} 
                      alt={announcement.title}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
                        </div>
                        <span>{announcement.likes}</span>
                      </div>
                      <span>{announcement.comments} comments</span>
                      <span>{announcement.shares} shares</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <button 
                      onClick={() => handleLike(announcement.id)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex-1 justify-center ${
                        likedPosts.has(announcement.id) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Heart size={18} fill={likedPosts.has(announcement.id) ? "currentColor" : "none"} />
                      <span className="text-sm">Like</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200 flex-1 justify-center">
                      <MessageCircle size={18} />
                      <span className="text-sm">Comment</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200 flex-1 justify-center">
                      <Share size={18} />
                      <span className="text-sm">Share</span>
                    </button>
                    
                    <button 
                      onClick={() => handleSave(announcement.id)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ${
                        savedPosts.has(announcement.id) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Bookmark size={18} fill={savedPosts.has(announcement.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - 40% width (2/5) */}
          <div className="lg:col-span-2">
            <div className="sticky top-6 space-y-4 sm:space-y-6">
              {/* Recent Announcements */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
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
                      className="flex items-start gap-3 sm:gap-4 p-3 rounded-lg sm:rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
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
    </div>
  );
};

export default Announcements;