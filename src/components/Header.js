import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
     <span>Movies <span className='text-white'>Revue</span></span>
    <Link to={"/addmovie"}> <h1 
     className='text-lg text-white flex items-center cursor-pointer'>
     <AddCircleOutlineIcon className='mr-1' color='success'/>
     Add Movie
     </h1>
     </Link>
    </div>
  )
}

export default Header
