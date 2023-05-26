import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';

function Header() {
  return (
    <div className='text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
     <span>Filmy <span className='text-white'>Verse</span></span>
     <h1 
     className='text-lg text-white flex items-center cursor-pointer'>
     <AddCircleOutlineIcon className='mr-1' color='success'/>
     
     </h1>
    </div>
  )
}

export default Header
