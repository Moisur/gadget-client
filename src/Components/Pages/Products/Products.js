import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const Products = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
               
            })
    },[])
    const OrderUser =(order)=>{
        const {name,price}=order;
        const email = user.email;
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,price,email
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-6xl text-green-600 font-mono font-bold p-4 '> This is product : {product.length}</h1>
            <div className='grid grid-cols-3 gap-4 p-20'>
                {
                    product.map(pd => <div className='p-10 bg-red-300' key={pd._id}>
                        <div>
                            <p>{pd.name}</p>
                            <p>{pd.price}</p>
                            <button onClick={()=>OrderUser(pd)} className='bg-lime-500 py-2 px-10 m-2  cursor-pointer rounded-2xl text-white'>Order</button>
                        </div>

                    </div>)
                }

            </div>

        </div>
    );
};

export default Products;