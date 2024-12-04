import React, { useState } from 'react';
import { Send, Download } from 'lucide-react';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });
  };

  return (
    <section className="py-20 bg-gradient-to-t from-neutral-950 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Register your HUMANLIKE book copy</h2>
            <p className="text-neutral-400 mb-8 text-center">
              Get access to additional resources by registering your copy.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A64833] text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A64833] text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Copy-paste the full Amazon email receipt
                </label>
                <textarea
                  type="email"
                  id="email"
                  rows={7}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A64833] text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#A64833] hover:bg-[#8B3B2A] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Now
              </button>
            </form>
            {/* <div className="mt-6 flex items-center justify-center gap-2 text-neutral-400 text-sm">
              <Download className="w-4 h-4" />
              <span>Instant access to exclusive materials</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;