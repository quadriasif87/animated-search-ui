// SearchBox.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function SearchBox({ value, onChange }) {
  return (
    <motion.div initial={{ width: 200 }} animate={{ width: 300 }} className="search-box">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
    </motion.div>
  );
}
