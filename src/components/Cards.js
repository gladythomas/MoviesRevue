import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import ReactStars from "react-stars";
import {getDocs} from 'firebase/firestore';
import { moviesRef } from './firebase/firebase';
function Cards() {
    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
    async function getData(){
        setLoading(true);
        const _data=await getDocs(moviesRef);
       _data.forEach((doc)=>{
        setData((prv)=>[...prv,doc.data()])
       })

        setLoading(false);
    }
    getData();
    },[])
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
        
            {
            loading ? <TailSpin height={40} color=''white/> : 
                data.map((e, i) => {
                    return (
                        <div key={i} className='card  font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500'>
                            <img className='h-72' src={e.image} alt="" />
                            <h1>
                                <span className='text-green-500'>
                                    Name:
                                </span>
                                {e.title}
                            </h1>
                            <h1 className='flex items-center'>
                                <span className='text-green-500 mr-1'>
                                    Rating:
                                </span>

                                <ReactStars
                                    size={20}
                                    half={true}
                                    value={5}
                                    edit={false}

                                />
                            </h1>
                            <h1>
                                <span className='text-green-500'>
                                    Year:
                                </span>
                                {e.year}
                            </h1>
                        </div>
                    );
                })}
        

        </div>
    )
}

export default Cards
