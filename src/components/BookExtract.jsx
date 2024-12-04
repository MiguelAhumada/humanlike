import React from 'react';
import { Quote } from 'lucide-react';

function BookExtract() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Quote className="w-6 h-6 text-[#A64833]" />
            <h2 className="text-3xl font-bold text-white">From the Introduction</h2>
          </div>
          <article>
            {/* <div className="container max-w-5xl bg-neutral-900 flex flex-row p-8 rounded-lg border border-neutral-800"> */}
            <div className="bg-neutral-900 flex flex-col gap-y-4 items-center lg:flex-row gap-x-12 p-8 rounded-lg border border-[#A64833]">
              <div>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  As we stand at the threshold of a new era in human history, the line between artificial and human intelligence grows increasingly blurred. This is not just a story about technology—it's a narrative about our evolving relationship with the machines we've created, and more importantly, with ourselves.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  In the pages that follow, we'll explore how AI systems are becoming more humanlike, not just in their capabilities, but in their ability to engage with the nuanced aspects of human experience. The questions we face are no longer about whether machines can think, but about how their thinking will shape our future.
                </p>
              </div>
              
              <div className="w-64 lg:w-38rem bg-neutral-800">
                <img 
                  src="https://m.media-amazon.com/images/I/71hqtjHYOFL._SL1491_.jpg"
                  alt="Previous Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </article>
        </div>
      </div>
    </section>
  );
}

export default BookExtract;