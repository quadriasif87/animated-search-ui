// SearchResults.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SearchResults({ results }) {
  return (
    <div className="results-container">
      <AnimatePresence>
        {results.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="result-item"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
