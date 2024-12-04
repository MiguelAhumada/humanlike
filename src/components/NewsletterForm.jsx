import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="relative flex-1 min-w-[240px]">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A64833] text-white placeholder-neutral-500"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-[#A64833] hover:bg-[#8B3B2A] text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}

export default NewsletterForm;