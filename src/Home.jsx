import React from "react";
import { Bell, Shield, TrendingUp, MessageCircle } from "lucide-react";

const Home = ({ user, setView, currentView }) => {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome, {user}</h1>
          <p className="text-slate-500">
            Here's what's happening in your business district today.
          </p>
        </div>
        <div className="bg-white p-2 rounded-full shadow-sm relative">
          <Bell className="text-slate-600" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Critical Alerts Card */}
        <div className="md:col-span-2 bg-red-50 border border-red-100 p-6 rounded-2xl">
          <div className="flex items-center gap-2 text-red-600 mb-4">
            <Shield size={24} />
            <h2 className="font-bold text-lg">Active Security Alerts</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between">
              <span>Suspicious vehicle reported on 4th St.</span>
              <span className="text-xs text-slate-400">10m ago</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="font-bold text-slate-800 mb-4">Quick Links</h2>
          <button
            onClick={() => setView("chat")}
            className="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl transition text-slate-700"
          >
            <MessageCircle className="text-blue-500" /> Open Neighborhood Chat
          </button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-green-50 rounded-xl transition text-slate-700 mt-2">
            <TrendingUp className="text-green-500" /> Post a Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
