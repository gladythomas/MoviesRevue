import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewRef , db } from '../components/firebase/firebase'
import { addDoc , doc,updateDoc , query ,where, getDocs} from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';
function Reviews({id,prevRating,userRated}) {
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const[form,setForm]=useState();
    const [data,setData]=useState([]);
    const [reviewsLoading,setReviewsLoading]=useState(false);

    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(reviewRef,{
                movieid:id,
                name:'glady Thomas',
                rating:rating,
                thought:form,
                timestamp:new Date().getTime()
            });
            const ref=doc(db,"movies",id); 
            await updateDoc(ref,{
                rating:prevRating+rating,
                rated:userRated+1
            })


            setRating(0);
            setForm("");
            swal({
                title:"Review Added",
                icon:"success",
                buttons:false,
                timer:3000
            })


        } catch (error) {
            swal({
                title:error,
                icon:error,
                buttons:false,
                timer:3000
            })
        }
        setLoading(false);
    }

    useEffect(()=>{
        async function getData(){
            setReviewsLoading(true);
                let quer=query(reviewRef, where('movieid','==',id))
                const  querySnapshot=await getDocs(quer);
                querySnapshot.forEach((doc)=>{
                        setData((prev)=>[...prev,doc.data()])
                })

            setReviewsLoading(false);
        }
        getData();
    })
    return (
        <div className="mt-4 py-2 border-t-2 border-gray-700 w-full">
            <ReactStars
                size={30}
                half={true}
                value={rating}
                onChange={(e) => setRating(e)}

            />
            <input
            value={form}
            onChange={(e)=>setForm(e.target.value)}
                placeholder='Share your Thoughts'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />

            <button  
            onClick={sendReview}
            className='bg-green-600 mt-3 flex justify-center w-full rounded-lg'>

                {loading ? <TailSpin height={40} color='white' /> : 'Share'}</button>

                {
                    reviewsLoading ?
                    <div className="mt-6 flex justify-center">
                        <ThreeDots height={10} color='white' />
                    </div>
                    :
                    <div>
                        {
                            data.map((e,i)=>{
                                return(
                                    <div key={i}>
                                        {e.thought}
                                    </div>
                                )
                            })

                        }
                    </div>

                }

        </div>
    )
}

export default Reviews
