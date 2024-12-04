import React from 'react';
import NewsletterForm from './NewsletterForm';

function Footer() {
  return (
    <footer className="py-12 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-white text-center mb-4">Stay Updated</h3>
          <p className="text-neutral-400 text-center mb-6">
            Subscribe to receive news about upcoming books, events, and exclusive content.
          </p>
          <NewsletterForm />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-800 pt-8">
          <p className="text-neutral-400 text-sm">
            © 2024 HUMANLIKE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-400 hover:text-[#A64833] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-[#A64833] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;