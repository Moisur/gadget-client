import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';


const Login = () => {
    const [user] = useAuthState(auth);
    
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        const email = user.email
        console.log(email)
        fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:email})
        })
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem("Token",data.token)
        })
        navigate(from, { replace: true });
    }

    // 
    return (
        <div className='font-mono '>
            <h1 className='text-center p-2 text-3xl text-lime-600 '>Login Account</h1>

            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='text-white bg-lime-800 m-10 px-7 py-3 rounded-xl text-2xl'>Sing With Google</button>
            </div>
        </div>
    );
};

export default Login;