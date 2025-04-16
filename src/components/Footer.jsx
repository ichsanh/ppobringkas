import React, { useEffect, useRef } from 'react';
import logo from '../assets/img/PRWarna.svg'
import bri from '../assets/img/payment/bri.png';
import bni from '../assets/img/payment/bni.png';
import bca from '../assets/img/payment/bca.png';
import mandiri from '../assets/img/payment/mandiri.png';
import permata from '../assets/img/payment/permata bank.png';
import maybank from '../assets/img/payment/maybank.png';
import qris from '../assets/img/payment/Qris.png';
import fbicon from '../assets/img/fb-icon.svg';
import igicon from '../assets/img/ig-icon.svg';

const Footer = () => {
  const sliderRef = useRef(null);
  
  // Payment methods array
  const paymentMethods = [
    { name: "QRIS", img: qris },
    { name: "BRI", img: bri },
    { name: "BNI", img: bni },
    { name: "BCA", img: bca },
    { name: "Mandiri", img: mandiri },
    { name: "Permata Bank", img: permata },
    { name: "Maybank", img: maybank },
    // Duplicate items to create an infinite effect
    { name: "QRIS", img: qris },
    { name: "BRI", img: bri },
    { name: "BNI", img: bni },
  ];

  // Auto-slide effect
  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let position = 0;
    
    const animate = () => {
      position -= 0.5; // Adjust speed here (smaller = slower)
      
      // Reset position when enough items have scrolled by
      if (position <= -240) { // Adjust based on item width + gap
        position = 0;
      }
      
      if (slider) {
        slider.style.transform = `translateX(${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <footer className="bg-gray-100 pt-8 pb-4 border-t border-gray-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description Section */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logo} 
              alt="PPOB Ringkas" 
              className="h-25 w-80 mb-4 left-0"
            />
            <p className="text-gray-800 mb-2 text-left">
              Bayar Tagihan, Top up Pulsa dan Game di PPOB Ringkas, <span className="font-bold">Platform PPOB termurah, tercepat dan terpercaya.</span>
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4 text-left">Metode Pembayaran</h3>
            
            {/* Auto-sliding payment methods */}
            <div className="w-full overflow-hidden">
              <div 
                ref={sliderRef} 
                className="flex gap-4 transition-transform"
                style={{ width: "max-content" }}
              >
                {paymentMethods.map((payment, index) => (
                  <img 
                    key={`${payment.name}-${index}`} 
                    src={payment.img} 
                    alt={payment.name} 
                    className="h-8"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className='md:mx-auto sm:mx-0 col-span-1 md:col-span-1'>
            <h3 className="text-xl font-bold mb-4 text-left">Menu</h3>
            <ul className="space-y-3 text-left">
              <li><a href="#" className="text-gray-800 hover:text-red-800">Beranda</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-800">Produk</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-800">Blog</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-800">Tentang</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-800">Kontak</a></li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className='mx-auto col-span-1 md:col-span-1'>
            <h3 className="text-xl font-bold mb-4 text-left">Customer Care</h3>
            <div className="space-y-3 text-left">
              <p className="flex items-center">
                <span className="text-blue-500 mr-2">📱</span>
                <span>Telp: 021-2793-8050</span>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✉️</span>
                <span>info@ppobringkas.com</span>
              </p>
              <p className="text-gray-800">
                Jl. Sultan Iskandar Muda No. 28B, Desa/Kelurahan Kebayoran Lama Utara, Kec. Kebayoran Lama, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta, Kode Pos: 12240
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-left">Sosial Media</h3>
            <div className="flex mt-4 space-x-3">
                <a href="#" className="text-blue-900">
                  <img src={fbicon} alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#" className="text-pink-600">
                  <img src={igicon} alt="Instagram" className="w-8 h-8" />
                </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 ppob ringkas. All right Reserved</p>
            <div className="flex flex-wrap gap-4 mt-3 md:mt-0">
              <a href="#" className="text-gray-600 text-sm hover:text-red-800">Kebijakan Privasi</a>
              <a href="#" className="text-gray-600 text-sm hover:text-red-800">Syarat dan Ketentuan</a>
              <a href="#" className="text-gray-600 text-sm hover:text-red-800">Pengaduan</a>
              <a href="#" className="text-gray-600 text-sm hover:text-red-800">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;