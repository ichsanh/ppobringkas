import React from 'react';
import newsimg from '../../../assets/img/news-img.png';

// Sample news data - replace with your actual data
const newsItems = [
  {
    id: 1,
    title: "Tips and Trik Memilih Top-Up Game yang Bagus",
    excerpt: "Saat memilih layanan top-up game, penting untuk memastikan keamanan dan kenyamanan transaksi. Pertama....",
    image: newsimg // Replace with your image path
  },
  {
    id: 2,
    title: "Manfaat BPJS Kesehatan untuk Masyarakat",
    excerpt: "BPJS Kesehatan memberikan berbagai manfaat yang sangat penting bagi masyarakat, terutama dalam hal akses terhadap...",
    image: newsimg // Replace with your image path
  },
  {
    id: 3,
    title: "Cara Hemat Listrik di Rumah",
    excerpt: "Menghemat listrik di rumah bisa dimulai dengan langkah sederhana, seperti mematikan peralatan elektronik yang tidak digunakan. Biasakan mencabut....",
    image: newsimg // Replace with your image path
  }
];

const NewsCard = ({ title, excerpt, image }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
        <div className="p-4 pb-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-55 object-cover rounded-xl"
          />
        </div>
        <div className="p-4">
          <h2 className="text-base font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-3">{excerpt}</p>
          <a href="#" className="text-blue-400 hover:text-blue-500 text-sm">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  // News Section Component
  const NewsSection = () => {
    return (
      <div className="py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-6 text-left">Berita Terbaru</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard 
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsSection;