import React from 'react';
import { ShoppingCart, CreditCard, Zap } from 'lucide-react';

export default function WhyUsSection() {
  return (
    <div className="my-6 bg-gray-100">
      <div className="container max-w-6xl mx-auto px-4 py-15">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Heading */}
          <div className="w-full md:w-2/5 lg:w-1/3 my-auto">
            <h2 className="text-4xl font-bold text-black text-left leading-tight">
              Mengapa Topup Game dan Isi Ulang Pulsa di PPOB Ringkas?
            </h2>
          </div>
          
          {/* Right side - Features */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <div className="flex flex-col gap-4">
              {/* Top row - two cards side by side */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Card 1 */}
                <div className="border border-gray-200 rounded-lg p-6 flex-1 bg-white hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-black text-lg mb-2">Transaksi cepat dan aman</h3>
                    <p className="text-gray-600 text-sm">
                      Nikmati pengalaman transaksi yang cepat dan dijamin aman di setiap pembelian.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="border border-gray-200 rounded-lg p-6 flex-1 bg-white hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full mb-3">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-black text-lg mb-2">Banyak metode pembayaran</h3>
                    <p className="text-gray-600 text-sm">
                      Kami menyediakan berbagai pilihan pembayaran yang fleksibel dan mudah.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom row - one wide card */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <ShoppingCart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-black text-lg mb-2">Semua kebutuhanmu di satu tempat</h3>
                  <p className="text-gray-600 text-sm">
                    Temukan semua produk dan layanan top-up game dan pulsa dalam satu platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}