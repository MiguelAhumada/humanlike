import React from 'react';
import { User } from 'lucide-react';

function Author() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-56 h-48 rounded-full overflow-hidden">
              <img 
                src="https://img.notionusercontent.com/s3/prod-files-secure%2F2229a86d-cfd4-42ec-9b0e-3f2cffd27758%2F06b0f182-b1c2-4bab-b10e-17036ffb61d7%2Fimage.png/size/w=2000?exp=1733419797&sig=QwFdj9O-rBHOk_eWBsAc1DpL1v9a0jBjc1fHt95Gyck"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About the Author</h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                <strong>Victor del Rosal</strong> is Chief AI Officer at fiveinnolabs (Ireland). He has worked as Director of Strategy and Business Development at CloudStrong, Irish cloud services provider, and as Head of Business Analysis for High Tech & Telecom at the Tata Consultancy Services (TCS) Supply Center of Excellence.
              </p>

              <p className="text-neutral-300 leading-relaxed mb-6">
                Victor is author of the book *Disruption: Emerging Technologies and the Future of Work*, ranked #12 on BookAuthority’s Best Technology Trends Books of all time.
              </p>

              <p className="text-neutral-300 leading-relaxed mb-6">
                He is lecturer of MSc in AI for Business and other Masters programs at National College of Ireland and corporate trainer on generative AI for the UCD Professional Academy (Dublin, Ireland).
              </p>

              <div className="flex items-center gap-2 text-[#A64833]">
                <User className="w-5 h-5" />
                <span className="font-medium">Victor del Rosal</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;