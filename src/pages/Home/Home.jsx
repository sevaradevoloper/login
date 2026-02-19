import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Chiqish (Logout) funksiyasi
  const handleLogout = () => {
    localStorage.removeItem('token'); // Tokenni o'chiramiz
    navigate('/'); // Login sahifasiga qaytaramiz
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600 tracking-tight">AutoZoom</h1>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
            <li className="hover:text-red-500 cursor-pointer transition">Asosiy</li>
            <li className="hover:text-red-500 cursor-pointer transition">Mashinalar</li>
            <li className="hover:text-red-500 cursor-pointer transition">Xizmatlar</li>
          </ul>
          <button 
            onClick={handleLogout}
            className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Chiqish
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto mt-10 px-6">
        <div className="bg-red-600 rounded-3xl p-10 md:p-20 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Orzuingizdagi avtomobilni biz bilan toping!
            </h2>
            <p className="text-red-100 text-lg">
              Eng so'nggi rusumdagi avtomobillarni ijaraga olish va sotib olish endi yanada oson.
            </p>
            <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg">
              Katalogga o'tish
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
             {/* Bu yerda mashina rasmi bo'lishi mumkin */}
             <div className="w-64 h-64 bg-red-500 rounded-full blur-3xl absolute opacity-50"></div>
             <img 
               src="https://www.pngplay.com/wp-content/uploads/13/Mercedes-Benz-G-Class-W463-PNG-Free-File-Download.png" 
               alt="Car" 
               className="relative z-10 w-full object-contain transform -scale-x-100 hover:scale-105 transition duration-500"
             />
          </div>
        </div>
      </header>

      {/* Ma'lumotlar kartochkalari */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="text-red-500 text-3xl mb-4">🚗</div>
          <h3 className="text-xl font-bold mb-2">Katta tanlov</h3>
          <p className="text-gray-500">100 dan ortiq avtomobil turlari sizni kutmoqda.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="text-red-500 text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">Tezkor rasmiylashtirish</h3>
          <p className="text-gray-500">Hujjatlarni bor-yo'g'i 15 daqiqada tayyorlab beramiz.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="text-red-500 text-3xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">To'liq sug'urta</h3>
          <p className="text-gray-500">Barcha avtomobillarimiz to'liq sug'urtalangan.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;