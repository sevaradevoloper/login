import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://autozoom.limsa.uz/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone_number: number,
                    password: password
                })
            });
            const data = await res.json();

            if (!res.ok) {
                alert(data?.message || 'Login yoki parol xato');
                return;
            }

            const token = data?.data?.tokens?.accessToken?.token;
            if (token) {
                localStorage.setItem('token', token);
                navigate('/home');
            } else {
                alert("Token topilmadi");
            }
        } catch (err) {
            alert('Nmadr xato');
        }
    }

    return (
        // Asosiy fon (To'q fon va markazlash)
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            
            {/* Login Kartasi */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Xush kelibsiz!</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Telefon raqam inputi */}
                    <div>
                        <label className="block text-gray-400 text-sm mb-2 ml-1">Telefon raqam</label>
                        <input
                            type="text"
                            placeholder="+998 90 123 45 67"
                            className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>

                    {/* Parol inputi */}
                    <div>
                        <label className="block text-gray-400 text-sm mb-2 ml-1">Parol</label>
                        <input
                            type="password" // type "text" dan "password" ga o'zgartirildi
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Yuborish tugmasi */}
                    <button 
                        type='submit'
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200"
                    >
                        Tizimga kirish
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-500 text-sm">
                    Hisobingiz yo'qmi? <span className="text-red-500 cursor-pointer hover:underline">Ro'yxatdan o'ting</span>
                </p>
            </div>
        </div>
    )
}

export default Login;