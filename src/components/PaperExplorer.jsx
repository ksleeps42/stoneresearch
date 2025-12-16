import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const papers = [
  {
    id: 'paste-graft-2020',
    title: 'Osteochondral Autograft Plugs versus Paste Graft: Ex Vivo Morselization Increases Chondral Matrix Production',
    authors: 'Grande D, Goldstein T, Turek TJ, et al.',
    journal: 'Cartilage',
    year: 2020,
    category: 'cartilage',
    keyFinding: 'Morselization increases chondrocyte proliferation 34-80%',
    patients: 16,
    followUp: null,
    doi: '10.1177/1947603520916552',
  },
  {
    id: 'paste-graft-10-23-year',
    title: 'Articular Cartilage Paste Graft for Severe Osteochondral Lesions of the Knee: A 10- to 23-Year Follow-up Study',
    authors: 'Stone KR, Pelsis JR, Na K, Walgenbach AW, Turek TJ',
    journal: 'KSSTA',
    year: 2016,
    category: 'cartilage',
    keyFinding: '19.1 year median benefit time; 90% good-excellent pain relief',
    patients: 74,
    followUp: '10-23 years',
    doi: '10.1007/s00167-016-4323-7',
  },
  {
    id: 'paste-graft-2-12-year',
    title: 'Articular Cartilage Paste Grafting to Full-Thickness Articular Cartilage Knee Joint Lesions: A 2- to 12-Year Follow-up',
    authors: 'Stone KR, Walgenbach AW, Freyer A, Turek TJ, Speer DP',
    journal: 'Arthroscopy',
    year: 2006,
    category: 'cartilage',
    keyFinding: '85.6% success rate; 63.6% biopsy cartilage regeneration',
    patients: 125,
    followUp: '2-12 years',
    doi: '10.1016/j.arthro.2005.12.051',
  },
  {
    id: 'meniscus-survival-arthritic',
    title: 'Meniscus Allograft Survival in Patients with Moderate to Severe Unicompartmental Arthritis',
    authors: 'Stone KR, Walgenbach AW, Turek TJ, Freyer A, Hill MD',
    journal: 'Arthroscopy',
    year: 2006,
    category: 'meniscus',
    keyFinding: '89.4% survival rate in arthritic knees',
    patients: 45,
    followUp: '2-7 years',
    doi: '10.1016/j.arthro.2005.12.045',
  },
  {
    id: 'meniscus-sizing',
    title: 'Meniscal Sizing Based on Gender, Height, and Weight',
    authors: 'Stone KR, Freyer A, Turek T, Walgenbach AW, Wadhwa S, Crues J',
    journal: 'Arthroscopy',
    year: 2007,
    category: 'meniscus',
    keyFinding: 'Height/weight/gender correlate with meniscal dimensions',
    patients: 111,
    followUp: null,
    doi: '10.1016/j.arthro.2006.12.025',
  },
  {
    id: 'xenograft-acl-20-year',
    title: 'Xenograft Bone-Patellar Tendon-Bone ACL Reconstruction: A Case Series at 20-Year Follow-up',
    authors: 'Stone KR, Walgenbach AW, Turek TJ, Crues JV, Galili U',
    journal: 'J Exp Orthopaedics',
    year: 2023,
    category: 'ligament',
    keyFinding: 'First proof humanized porcine tissue becomes autologous ACL',
    patients: 10,
    followUp: '20 years',
    doi: '10.1186/s40634-023-00651-7',
  },
  {
    id: 'acl-3-incision',
    title: 'ACL Reconstruction: 3-Incision Technique With Allograft Quad Tendon',
    authors: 'Stone KR',
    journal: 'VJSM',
    year: 2024,
    category: 'ligament',
    keyFinding: 'Reproducible technique avoiding autograft harvest',
    patients: null,
    followUp: null,
    doi: '10.1177/26350254231206141',
  },
];

const categoryConfig = {
  cartilage: { label: 'Articular Cartilage', color: '#10b981', bgColor: '#ecfdf5' },
  meniscus: { label: 'Meniscus', color: '#3b82f6', bgColor: '#eff6ff' },
  ligament: { label: 'Ligaments', color: '#f59e0b', bgColor: '#fffbeb' },
};

function PaperCard({ paper, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cat = categoryConfig[paper.category];
  
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white border border-stone-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span 
            className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full"
            style={{ backgroundColor: cat.bgColor, color: cat.color }}
          >
            {cat.label}
          </span>
          <span className="font-mono text-sm text-stone-400">{paper.year}</span>
        </div>
        
        <h3 className="font-display text-lg text-stone-900 mb-2 leading-snug">
          {paper.title}
        </h3>
        
        <p className="text-sm text-stone-500 mb-3">
          {paper.authors}
        </p>
        
        <div 
          className="border-l-2 pl-3 py-1 mb-4"
          style={{ borderColor: cat.color }}
        >
          <p className="text-sm font-medium text-stone-700">
            {paper.keyFinding}
          </p>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-100 text-sm">
                {paper.patients && (
                  <div>
                    <span className="text-stone-400">Patients:</span>{' '}
                    <span className="font-medium text-stone-700">n={paper.patients}</span>
                  </div>
                )}
                {paper.followUp && (
                  <div>
                    <span className="text-stone-400">Follow-up:</span>{' '}
                    <span className="font-medium text-stone-700">{paper.followUp}</span>
                  </div>
                )}
                <div>
                  <span className="text-stone-400">Journal:</span>{' '}
                  <span className="font-medium text-stone-700">{paper.journal}</span>
                </div>
              </div>
              
              {paper.doi && (
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-colors"
                  style={{ color: cat.color }}
                >
                  View Publication
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
          <span className="text-xs text-stone-400">
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PaperExplorer() {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('year-desc');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPapers = useMemo(() => {
    let result = papers;
    
    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.keyFinding.toLowerCase().includes(query) ||
        p.authors.toLowerCase().includes(query)
      );
    }
    
    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'year-desc': return b.year - a.year;
        case 'year-asc': return a.year - b.year;
        case 'patients': return (b.patients || 0) - (a.patients || 0);
        default: return 0;
      }
    });
    
    return result;
  }, [categoryFilter, sortBy, searchQuery]);
  
  return (
    <div>
      {/* Controls */}
      <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-sm text-sm focus:outline-none focus:border-stone-400"
              />
            </div>
          </div>
          
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All' },
              { id: 'cartilage', label: 'Cartilage' },
              { id: 'meniscus', label: 'Meniscus' },
              { id: 'ligament', label: 'Ligaments' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  categoryFilter === cat.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-stone-200 rounded-sm text-sm bg-white focus:outline-none focus:border-stone-400"
          >
            <option value="year-desc">Newest First</option>
            <option value="year-asc">Oldest First</option>
            <option value="patients">Most Patients</option>
          </select>
        </div>
      </div>
      
      {/* Results count */}
      <p className="text-sm text-stone-500 mb-4">
        Showing {filteredPapers.length} of {papers.length} studies
      </p>
      
      {/* Papers grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredPapers.map((paper, index) => (
            <PaperCard key={paper.id} paper={paper} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredPapers.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-stone-500">No papers match your search.</p>
        </motion.div>
      )}
    </div>
  );
}
