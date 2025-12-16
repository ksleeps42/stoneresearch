import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, current => {
    if (typeof value === 'number') {
      return Math.round(current);
    }
    return value;
  });
  
  const [displayValue, setDisplayValue] = useState(typeof value === 'number' ? 0 : value);
  
  useEffect(() => {
    if (isInView && typeof value === 'number') {
      spring.set(value);
    }
  }, [isInView, value, spring]);
  
  useEffect(() => {
    return display.on('change', (latest) => {
      if (typeof value === 'number') {
        setDisplayValue(Math.round(latest));
      }
    });
  }, [display, value]);
  
  return (
    <span ref={ref}>
      {prefix}{typeof value === 'number' ? displayValue : value}{suffix}
    </span>
  );
}

const stats = [
  { 
    value: 30, 
    suffix: '+', 
    label: 'Years of Research',
    description: 'Continuous investigation since 1991'
  },
  { 
    value: 11, 
    suffix: '', 
    label: 'Published Studies',
    description: 'Peer-reviewed publications'
  },
  { 
    value: 500, 
    suffix: '+', 
    label: 'Patients Studied',
    description: 'Long-term outcomes tracked'
  },
  { 
    value: 23, 
    suffix: '', 
    label: 'Year Longest Follow-up',
    description: 'Paste graft outcomes study'
  },
];

export default function AnimatedStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  return (
    <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center p-6 bg-white border border-stone-200 rounded-sm"
        >
          <div className="font-display text-4xl lg:text-5xl text-stone-900 mb-2">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-sm font-medium text-stone-700 uppercase tracking-wider mb-1">
            {stat.label}
          </div>
          <div className="text-xs text-stone-400">
            {stat.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
