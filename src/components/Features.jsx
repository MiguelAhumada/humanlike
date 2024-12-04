import React from 'react';

function Features() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Why HUMANLIKE?</h2>
        <div className='text-neutral-300 flex flex-col gap-y-2 max-w-5xl mx-auto mb-5'>
          <p>
            Over the past two years, I've had the chance to discuss with my professional network and learning communities, including Masters students and corporate workshop participants, what this incarnation of AI, generative AI, might mean for business and society.
          </p>
          <p>
            What struck me were the visceral responses we'd see during class discussions. At first I didn't quite get it. Then it dawned on me: genAI deals in two of our most precious currencies: intelligence and language, emulating to some extent what we do, i.e., behaving in humanlike ways.
          </p>
          <p>
            Personally, I thought creativity, for example, was off-limits, but it turns out humanlike AI is a pretty decent brainstorming partner. Its downsides, e.g., hallucinations, can be seen as humanlike too.
          </p>
          <p>
            After tinkering with it, studying it, and delivering hundreds of sessions, I identified a number of recurring ideas and concerns.
          </p>
          <p>
            These guided my intuition about its transformative potential, e.g., how it might reshape work as we know it.
          </p>
          <p>
            I've been encouraged to share these ideas with you. I wrote a book called "HUMANLIKE: the AI Transformation". I'm delighted to say: it is out now!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-xl font-semibold text-[#A64833] mb-4">AI and Our Humanity</h3>
            <p className="text-neutral-300 leading-relaxed">
              Explore how AI’s humanlike qualities challenge our understanding of creativity, intelligence, and communication.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-xl font-semibold text-[#A64833] mb-4">Transformative Potential</h3>
            <p className="text-neutral-300 leading-relaxed">
              Understand AI’s transformative potential and what it means for the future of work, innovation, and society.
            </p> 
          </div>

          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-xl font-semibold text-[#A64833] mb-4">Balanced Perspective</h3>
            <p className="text-neutral-300 leading-relaxed">
              Discover insights on the promises and perils of AI, helping you make thoughtful decisions about its integration.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-xl font-semibold text-[#A64833] mb-4">Practical Frameworks</h3>
            <p className="text-neutral-300 leading-relaxed">
              Equip yourself with business frameworks and strategies to integrate AI effectively and responsibly into your organization.
            </p> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;