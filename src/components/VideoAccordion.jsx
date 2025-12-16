import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const surgicalVideos = {
  knee: [
    { title: 'Allograft ACL Reconstruction Surgery', slug: 'acl-reconstruction', description: 'Quad tendon allograft technique for ACL reconstruction', vimeoId: '663177757' },
    { title: 'Articular Cartilage Paste Graft', slug: 'paste-graft', description: 'Morselized cartilage grafting for osteochondral lesions', vimeoId: '663421019' },
    { title: 'Lateral Meniscus Allograft Transplantation', slug: 'lateral-meniscus', description: 'Three-tunnel technique for lateral meniscus replacement', vimeoId: '663167891' },
    { title: 'Medial Meniscus Allograft Transplantation', slug: 'medial-meniscus', description: 'Three-tunnel technique for medial meniscus replacement', vimeoId: '663065746' },
    { title: 'Revision Medial Meniscus Allograft Transplantation', slug: 'revision-meniscus', description: 'Revision surgery for failed meniscus allograft', vimeoId: '663170160' },
    { title: 'Meniscus Allograft Transplant Preparation', slug: 'meniscus-prep', description: 'Tissue preparation and sizing recommendations', vimeoId: '663169019' },
    { title: 'Knee Dislocation & Ligament Reconstruction', slug: 'knee-dislocation', description: 'PCL & ACL reconstruction for knee dislocation (Part 1 of 2)', vimeoId: '663175472' },
    { title: 'Makoplasty Robotic Partial Knee Replacement', slug: 'makoplasty', description: 'Robot-assisted unicompartmental knee arthroplasty', vimeoId: '663434611' },
  ],
  ankle: [
    { title: 'Percutaneous Achilles Tendon Repair', slug: 'achilles-repair', description: 'Minimally invasive Achilles tendon reconstruction', vimeoId: '663117739' },
    { title: 'Stone Ankle Ligament Repair', slug: 'ankle-ligament', description: 'Modified Brostrom-Gould technique for ankle instability', vimeoId: '663441968' },
  ]
};

function VideoItem({ video, isOpen, onToggle, color }) {
  const bgColor = color === 'emerald' ? 'bg-emerald-100' : 'bg-blue-100';
  const bgColorHover = color === 'emerald' ? 'group-hover:bg-emerald-500' : 'group-hover:bg-blue-500';
  const textColor = color === 'emerald' ? 'text-emerald-600' : 'text-blue-600';
  const bgColorActive = color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500';
  
  return (
    <div className="border-b border-stone-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 hover:bg-stone-50 transition-colors group text-left"
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? bgColorActive : bgColor} ${!isOpen && bgColorHover}`}>
          <svg 
            className={`w-4 h-4 transition-all ${isOpen ? 'text-white rotate-90' : `${textColor} group-hover:text-white`}`} 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <span className={`font-medium transition-colors ${isOpen ? 'text-stone-900' : 'text-stone-700 group-hover:text-stone-900'}`}>
          {video.title}
        </span>
        <svg 
          className={`w-5 h-5 ml-auto text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <div className="aspect-video relative rounded-sm overflow-hidden bg-stone-900">
                <iframe 
                  src={`https://player.vimeo.com/video/${video.vimeoId}?h=0&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm text-stone-500">{video.description}</p>
                <a 
                  href={`/techniques/${video.slug}`}
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 whitespace-nowrap ml-4 inline-flex items-center gap-1"
                >
                  Summary & Transcript
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function VideoAccordion() {
  const [openVideo, setOpenVideo] = useState(null);
  
  const handleToggle = (slug) => {
    setOpenVideo(openVideo === slug ? null : slug);
  };
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Knee Procedures */}
      <div className="bg-white border border-stone-200 rounded-sm overflow-hidden">
        <div className="bg-emerald-500 px-6 py-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <h3 className="font-display text-xl text-white">Knee Procedures</h3>
            <span className="ml-auto text-emerald-100 text-sm">{surgicalVideos.knee.length} videos</span>
          </div>
        </div>
        <div>
          {surgicalVideos.knee.map((video) => (
            <VideoItem 
              key={video.slug}
              video={video}
              isOpen={openVideo === video.slug}
              onToggle={() => handleToggle(video.slug)}
              color="emerald"
            />
          ))}
        </div>
      </div>
      
      {/* Ankle Procedures */}
      <div className="bg-white border border-stone-200 rounded-sm overflow-hidden h-fit">
        <div className="bg-blue-500 px-6 py-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <h3 className="font-display text-xl text-white">Ankle Procedures</h3>
            <span className="ml-auto text-blue-100 text-sm">{surgicalVideos.ankle.length} videos</span>
          </div>
        </div>
        <div>
          {surgicalVideos.ankle.map((video) => (
            <VideoItem 
              key={video.slug}
              video={video}
              isOpen={openVideo === video.slug}
              onToggle={() => handleToggle(video.slug)}
              color="blue"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
