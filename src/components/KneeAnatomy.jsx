import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const kneeAreas = {
  cartilage: {
    name: 'Articular Cartilage',
    description: 'The smooth, white tissue covering the ends of bones where they meet to form joints.',
    studies: 4,
    keyFinding: '19.1 year median benefit time with paste grafting',
    color: '#10b981',
    path: 'M150,80 Q180,100 200,140 Q220,180 200,220 Q180,240 150,250 Q120,240 100,220 Q80,180 100,140 Q120,100 150,80',
    href: '/research/articular-cartilage'
  },
  meniscus: {
    name: 'Meniscus',
    description: 'C-shaped cartilage that acts as a shock absorber between femur and tibia.',
    studies: 4,
    keyFinding: '89.4% allograft survival in arthritic knees',
    color: '#3b82f6',
    pathLeft: 'M90,200 Q60,210 50,230 Q45,250 60,260 Q80,265 100,255 Q115,245 110,225 Q105,205 90,200',
    pathRight: 'M210,200 Q240,210 250,230 Q255,250 240,260 Q220,265 200,255 Q185,245 190,225 Q195,205 210,200',
    href: '/research/meniscus'
  },
  acl: {
    name: 'ACL / Ligaments',
    description: 'The anterior cruciate ligament prevents the tibia from sliding forward.',
    studies: 2,
    keyFinding: '20-year success with humanized xenograft',
    color: '#f59e0b',
    path: 'M140,160 L160,240 M160,160 L140,240',
    href: '/research/ligaments'
  }
};

export default function KneeAnatomy() {
  const [activeArea, setActiveArea] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);

  const currentArea = activeArea || hoveredArea;

  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* SVG Knee Diagram */}
      <div className="relative w-[300px] h-[340px] flex-shrink-0">
        <svg 
          viewBox="0 0 300 340" 
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))' }}
        >
          {/* Femur (thigh bone) */}
          <path
            d="M150,20 Q200,40 210,80 Q220,120 200,160 Q180,180 150,185 Q120,180 100,160 Q80,120 90,80 Q100,40 150,20"
            fill="#f5f5f4"
            stroke="#d6d3d1"
            strokeWidth="2"
          />
          
          {/* Tibia (shin bone) */}
          <path
            d="M150,255 Q200,260 210,280 Q220,310 200,330 Q150,340 100,330 Q80,310 90,280 Q100,260 150,255"
            fill="#f5f5f4"
            stroke="#d6d3d1"
            strokeWidth="2"
          />
          
          {/* Articular Cartilage - Femoral surface */}
          <motion.path
            d={kneeAreas.cartilage.path}
            fill={currentArea === 'cartilage' ? kneeAreas.cartilage.color : '#e7e5e4'}
            stroke={kneeAreas.cartilage.color}
            strokeWidth={currentArea === 'cartilage' ? 3 : 2}
            className="cursor-pointer transition-colors duration-200"
            onMouseEnter={() => setHoveredArea('cartilage')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => setActiveArea(activeArea === 'cartilage' ? null : 'cartilage')}
            animate={{
              scale: currentArea === 'cartilage' ? 1.02 : 1,
              opacity: currentArea && currentArea !== 'cartilage' ? 0.4 : 1
            }}
            style={{ transformOrigin: 'center' }}
          />
          
          {/* Meniscus - Left */}
          <motion.path
            d={kneeAreas.meniscus.pathLeft}
            fill={currentArea === 'meniscus' ? kneeAreas.meniscus.color : '#e7e5e4'}
            stroke={kneeAreas.meniscus.color}
            strokeWidth={currentArea === 'meniscus' ? 3 : 2}
            className="cursor-pointer transition-colors duration-200"
            onMouseEnter={() => setHoveredArea('meniscus')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => setActiveArea(activeArea === 'meniscus' ? null : 'meniscus')}
            animate={{
              scale: currentArea === 'meniscus' ? 1.05 : 1,
              opacity: currentArea && currentArea !== 'meniscus' ? 0.4 : 1
            }}
            style={{ transformOrigin: 'center' }}
          />
          
          {/* Meniscus - Right */}
          <motion.path
            d={kneeAreas.meniscus.pathRight}
            fill={currentArea === 'meniscus' ? kneeAreas.meniscus.color : '#e7e5e4'}
            stroke={kneeAreas.meniscus.color}
            strokeWidth={currentArea === 'meniscus' ? 3 : 2}
            className="cursor-pointer transition-colors duration-200"
            onMouseEnter={() => setHoveredArea('meniscus')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => setActiveArea(activeArea === 'meniscus' ? null : 'meniscus')}
            animate={{
              scale: currentArea === 'meniscus' ? 1.05 : 1,
              opacity: currentArea && currentArea !== 'meniscus' ? 0.4 : 1
            }}
            style={{ transformOrigin: 'center' }}
          />
          
          {/* ACL */}
          <motion.g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredArea('acl')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => setActiveArea(activeArea === 'acl' ? null : 'acl')}
            animate={{
              opacity: currentArea && currentArea !== 'acl' ? 0.4 : 1
            }}
          >
            <motion.line
              x1="140" y1="170" x2="160" y2="245"
              stroke={currentArea === 'acl' ? kneeAreas.acl.color : '#a8a29e'}
              strokeWidth={currentArea === 'acl' ? 6 : 4}
              strokeLinecap="round"
            />
            <motion.line
              x1="160" y1="170" x2="140" y2="245"
              stroke={currentArea === 'acl' ? kneeAreas.acl.color : '#a8a29e'}
              strokeWidth={currentArea === 'acl' ? 6 : 4}
              strokeLinecap="round"
            />
          </motion.g>
          
          {/* Labels */}
          <text x="150" y="50" textAnchor="middle" className="text-xs fill-stone-400 font-medium">FEMUR</text>
          <text x="150" y="310" textAnchor="middle" className="text-xs fill-stone-400 font-medium">TIBIA</text>
        </svg>
        
        {/* Click instruction */}
        <p className="text-center text-sm text-stone-400 mt-4">
          Click an area to explore research
        </p>
      </div>
      
      {/* Info Panel */}
      <div className="flex-1 min-h-[280px]">
        <AnimatePresence mode="wait">
          {currentArea ? (
            <motion.div
              key={currentArea}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-stone-200 rounded-sm p-6 shadow-lg"
            >
              <div 
                className="w-3 h-3 rounded-full mb-4"
                style={{ backgroundColor: kneeAreas[currentArea].color }}
              />
              <h3 className="font-display text-2xl text-stone-900 mb-2">
                {kneeAreas[currentArea].name}
              </h3>
              <p className="text-stone-600 mb-4">
                {kneeAreas[currentArea].description}
              </p>
              <div 
                className="border-l-2 pl-4 py-2 mb-6"
                style={{ borderColor: kneeAreas[currentArea].color }}
              >
                <p className="text-sm text-stone-500 mb-1">Key Finding</p>
                <p className="font-medium text-stone-800">
                  {kneeAreas[currentArea].keyFinding}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-500">
                  {kneeAreas[currentArea].studies} published studies
                </span>
                <a 
                  href={kneeAreas[currentArea].href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
                >
                  Explore Research
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-center p-8"
            >
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <p className="text-stone-600 font-medium mb-2">Interactive Knee Anatomy</p>
              <p className="text-sm text-stone-400 max-w-xs">
                Hover or click on different parts of the knee to learn about our research in each area
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
