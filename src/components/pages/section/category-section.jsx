import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bpjsimg from '../../../assets/img/category-img/bpjs-icon.png';
import telkomselimg from '../../../assets/img/category-img/Telkomsel-icon.png';
import steamimg from '../../../assets/img/category-img/Steam-icon.png';
import plnimg from '../../../assets/img/category-img/pln-icon.png';
import plntknimg from '../../../assets/img/category-img/plntkn-icon.png';
import pdamimg from '../../../assets/img/category-img/pdam-icon.png';
import tvkabelimg from '../../../assets/img/category-img/tv-icon.png';
import multiimg from '../../../assets/img/category-img/multi-icon.png';
import samsatimg from '../../../assets/img/category-img/Samsat-icon.png';
import ccimg from '../../../assets/img/category-img/cc-icon.png';

const CategorySection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const categories = [
      { id: 'all', name: 'All', count: 10 },
      { id: 'voucher-game', name: 'Voucher Game', count: 1 },
      { id: 'pulsa', name: 'Pulsa', count: 1 },
      { id: 'tagihan-listrik-pln', name: 'Tagihan Listrik PLN', count: 1 },
      { id: 'tagihan', name: 'Tagihan', count: 5 },
      { id: 'token-listrik-pln', name: 'Token Listrik PLN', count: 1 },
      { id: 'pdam', name: 'PDAM', count: 1 },
    ];
    
    const categoryItems = [
      { id: 'steam', name: 'STEAM', icon: steamimg, category: 'voucher-game' },
      { id: 'telkomsel', name: 'Telkomsel', icon: telkomselimg, category: 'pulsa' },
      { id: 'pln-postpaid', name: 'PLN PostPaid', icon: plnimg, category: 'tagihan-listrik-pln' },
      { id: 'pdam', name: 'PDAM', icon: pdamimg, category: 'pdam' },
      { id: 'tv-kabel', name: 'TV Kabel', icon: tvkabelimg, category: 'tagihan' },
      { id: 'multifinance', name: 'Multifinance', icon: multiimg, category: 'tagihan' },
      { id: 'bpjs-kesehatan', name: 'BPJS Kesehatan', icon: bpjsimg, category: 'tagihan' },
      { id: 'pajak-kendaraan', name: 'Pajak Kendaraan Bermotor', icon: samsatimg, category: 'tagihan' },
      { id: 'credit-card', name: 'Credit Card', icon: ccimg, category: 'tagihan' },
      { id: 'pln-token', name: 'PLN Token 50', icon: plntknimg, category: 'token-listrik-pln' },
    ];
  
    const handleCategoryClick = (categoryId) => {
      setActiveCategory(categoryId);
    };
  
    const filteredItems = activeCategory === 'all' 
      ? categoryItems 
      : categoryItems.filter(item => item.category === activeCategory);
  
    return (
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mt-15 mb-6 text-left">Cari Berdasarkan Kategori</h2>
        
        {/* Category Pills with Animation */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryClick(category.id)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              initial={false}
              animate={activeCategory === category.id ? {
                backgroundColor: '#1f2937', // bg-gray-800
                color: '#ffffff',
                scale: 1.05
              } : {
                backgroundColor: '#f3f4f6', // bg-gray-100
                color: '#1f2937',
                scale: 1
              }}
              transition={{ duration: 0.3 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>
        
        {/* Category Cards Grid with Animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="h-16 w-16 flex-shrink-0">
                  <img src={item.icon} alt={item.name} className="h-full w-full object-contain" />
                </div>
                <div className="ml-4">
                  <span className="text-base font-medium text-gray-900">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  };
  
  export default CategorySection;