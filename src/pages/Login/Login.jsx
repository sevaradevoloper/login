import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [number,setNumber] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit= async (e)=>{
        e.preventDefault();

        try{
            const res = await fetch("https://autozoom.limsa.uz/api/auth/signin",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    phone_number:number,
                    password:password
                })

            })
            const data = await res.json();

            if(!res.ok){
               alert(data?.message || 'Login yoki parol xato')
                return
            }

            const token = data?.data?.tokens?.accessToken?.token;
            if (token) {
                // 4. Vergul qo'shtirnoqdan tashqarida bo'lishi kerak
                localStorage.setItem('token', token);
                navigate('/home');
            } else {
                alert("Token topilmadi");
            }
        }catch(err){
            alert('Nmadr xato')
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={number} 
             onChange={(e)=>setNumber(e.target.value)}
            />
             <input
              type="text" 
              value={password} 
             onChange={(e)=>setPassword(e.target.value)}
              />
             <button type='submit'>Send</button>


        </form>
    </div>
  )
}

export default Login