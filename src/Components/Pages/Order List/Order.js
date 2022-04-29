import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const Order = () => {
    const [order,setOrder]=useState([])
    const [user] = useAuthState(auth);
  
    useEffect(()=>{
        fetch('http://localhost:5000/orders',{
            headers:{
                'authorization':`${user.email} `,
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[])
    return (
        <div>
            This is order pages  {order.length}
            <div className='grid grid-cols-3 gap-4 p-20'>
                {
                    order.map(pd => <div className='p-10 bg-red-300' key={pd._id}>
                        <div>
                            <p>{pd.name}</p>
                            <p>{pd.price}</p>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Order;