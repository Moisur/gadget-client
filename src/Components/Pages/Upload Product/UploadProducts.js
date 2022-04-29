import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
const UploadProducts = () => {
    const [user] = useAuthState(auth);
   
    const UploadProductsAll = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const data = {name,price}
        const url = 'http://localhost:5000/products';
        fetch(url,{
            method:"POST",
            headers:{
                'authorization':`${user.email} ${localStorage.getItem("Token")}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }



    return (
        <div className='w-[40%] mx-auto mt-20 bg-lime-400 p-20 rounded text-2xl font-mono text-white font-bold'>
            <form onSubmit={UploadProductsAll}>
                <div className='mb-5'>
                    <label htmlFor="name">Product Names :</label> <br />
                    <input className='w-full rounded text-black' type="text" name='name' id="name" placeholder='Product Names ' required />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Prices">Product Prices :</label> <br />
                    <input className='w-full rounded text-black' name='price' type="text" id="Prices" placeholder='Product Prices ' required />
                </div>
                <div>
                    <input className='w-full cursor-pointer bg-slate-600 rounded px-4 py-2' type="submit" value='Product Add ' />
                </div>

            </form>
        </div>
    );
};

export default UploadProducts;