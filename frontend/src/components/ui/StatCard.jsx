import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export function StatCard({ icon, value, label, suffix = '', animate = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (animate) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else {
      setCount(value);
    }
  }, [animate, value]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-slate-800 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">
        {label}
      </div>
    </div>
  );
}

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  animate: PropTypes.bool
};