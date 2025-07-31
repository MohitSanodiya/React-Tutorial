import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Paste.css'
const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes)

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='paste-app pt-2 pr-10 pl-10'>
      <input className='min-w-[600px]'
       type="search" 
       name="" id="paste-input1"
       placeholder='Search here'
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}/>

       <div className='flex flex-col gap-5 ' id="paste-container">
        <h1>All Pastes</h1>
        {
          filterData.length>0 && filterData.map((paste)=>{
            return(
              <div className='border'>{paste.title}</div>
            )
          })
        }
       </div>
    </div>
  )
}

export default Paste
