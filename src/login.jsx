import React, { useState } from "react";
import { Shield } from "lucide-react";

const Login = ({ onLogin }) => {
  const [businessName, setBusinessName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (businessName.trim()) {
      onLogin(businessName);
    }
  };
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <Shield className="text-blue-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">BizConnect</h1>
          <p className="text-gray-500 text-center mt-2">
            Verify your business to join the local feed.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="e.g. Kokopelli Jewelry"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
          >
            Enter Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
