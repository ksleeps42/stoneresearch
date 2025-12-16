import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const milestones = [
  {
    year: 1991,
    title: 'Paste Graft Technique Developed',
    description: 'Dr. Stone develops the articular cartilage paste grafting technique.',
    category: 'cartilage',
    color: '#10b981'
  },
  {
    year: 1997,
    title: 'First Surgical Technique Published',
    description: 'Operative Techniques in Orthopaedics publishes the paste graft method.',
    category: 'cartilage',
    color: '#10b981'
  },
  {
    year: 2003,
    title: 'Three-Tunnel Technique',
    description: 'Improved meniscus allografting technique published in Arthroscopy.',
    category: 'meniscus',
    color: '#3b82f6'
  },
  {
    year: 2003,
    title: 'Xenograft ACL Trial Begins',
    description: 'FDA-approved pilot study of humanized porcine ACL reconstruction.',
    category: 'ligament',
    color: '#f59e0b'
  },
  {
    year: 2006,
    title: 'Meniscus Survival Study',
    description: '89.4% survival rate in arthritic knees challenges conventional contraindications.',
    category: 'meniscus',
    color: '#3b82f6'
  },
  {
    year: 2006,
    title: 'Paste Graft 2-12 Year Outcomes',
    description: '85.6% success rate with 63.6% showing cartilage regeneration on biopsy.',
    category: 'cartilage',
    color: '#10b981'
  },
  {
    year: 2007,
    title: 'Meniscal Sizing Protocol',
    description: 'Height, weight, and gender established as predictors for tissue matching.',
    category: 'meniscus',
    color: '#3b82f6'
  },
  {
    year: 2016,
    title: 'Paste Graft 10-23 Year Follow-up',
    description: 'Median benefit time of 19.1 years—one of longest follow-ups in literature.',
    category: 'cartilage',
    color: '#10b981'
  },
  {
    year: 2020,
    title: 'Morselization Mechanism Discovered',
    description: 'Study shows impaction stimulates chondrocyte proliferation, not cell death.',
    category: 'cartilage',
    color: '#10b981'
  },
  {
    year: 2023,
    title: 'Xenograft 20-Year Success',
    description: 'Proof-of-principle that humanized porcine tissue can become autologous ACL.',
    category: 'ligament',
    color: '#f59e0b'
  },
  {
    year: 2024,
    title: '3-Incision ACL Technique',
    description: 'Reproducible quad tendon allograft technique published.',
    category: 'ligament',
    color: '#f59e0b'
  }
];

function TimelineItem({ milestone, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-4 h-4 rounded-full border-4 border-white shadow-md z-10"
          style={{ backgroundColor: milestone.color }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        />
        {!isLast && (
          <motion.div 
            className="w-0.5 flex-1 bg-stone-200"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            style={{ originY: 0 }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span 
            className="font-mono text-sm font-semibold px-2 py-0.5 rounded"
            style={{ 
              backgroundColor: `${milestone.color}15`,
              color: milestone.color
            }}
          >
            {milestone.year}
          </span>
          <span 
            className="text-xs uppercase tracking-wider"
            style={{ color: milestone.color }}
          >
            {milestone.category}
          </span>
        </div>
        <h3 className="font-display text-lg text-stone-900 mb-1">
          {milestone.title}
        </h3>
        <p className="text-stone-600 text-sm">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ResearchTimeline() {
  const [filter, setFilter] = useState('all');
  
  const filteredMilestones = filter === 'all' 
    ? milestones 
    : milestones.filter(m => m.category === filter);
  
  const categories = [
    { id: 'all', label: 'All Research', color: '#78716c' },
    { id: 'cartilage', label: 'Cartilage', color: '#10b981' },
    { id: 'meniscus', label: 'Meniscus', color: '#3b82f6' },
    { id: 'ligament', label: 'Ligaments', color: '#f59e0b' }
  ];

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <motion.button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
              filter === cat.id 
                ? 'text-white border-transparent' 
                : 'border-stone-200 text-stone-600 hover:border-stone-300'
            }`}
            style={{
              backgroundColor: filter === cat.id ? cat.color : 'transparent'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {filteredMilestones.map((milestone, index) => (
          <TimelineItem 
            key={`${milestone.year}-${milestone.title}`}
            milestone={milestone}
            index={index}
            isLast={index === filteredMilestones.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
