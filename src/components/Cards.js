import React from 'react'

function Cards() {
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
            <div className='card  font-medium shadow-lg p-2 hover:-translate-y-2 cursor-pointer'>
                <img className='h-72' src="https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg" alt="" />
                <h1>
                    <span className='text-green-500'>
                        Name:
                    </span>
                    Avengers Infinity War
                </h1>
                <h1>
                    <span className='text-green-500'>
                        Rating:
                    </span>
                    5
                </h1>
                <h1>
                    <span className='text-green-500'>
                        Year:
                    </span>
                    2019
                </h1>
            </div>

        </div>
    )
}

export default Cards
