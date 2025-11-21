import React from "react";
import { Upload } from "lucide-react";

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Create New Post</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Share your thoughts and images with the community</p>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-6 sm:p-8">
          <form className="space-y-6">
            {/* Description Field */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3">
                Description
              </label>
              <textarea 
                className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                rows="6" 
                placeholder="What's on your mind? Share your thoughts..."
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3">
                Add Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer">
                <Upload className="mx-auto text-gray-400 mb-3 sm:mb-4" size={32} />
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  PNG, JPG, GIF up to 10MB
                </p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base">
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}