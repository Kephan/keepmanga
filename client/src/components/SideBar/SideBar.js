import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({ user }) => {

    const [showBar, setShowBar] = useState(true)

    console.log(user)
    const handleShowBar = () => {
        setShowBar(!showBar)
    }

    return (
        <div className={user && showBar ? `w-[200px] fixed h-full left-0 top-12 z-50 transition-all duration-300` : `w-[200px] fixed left-[-200px] h-full top-12 z-50 transition-all duration-300 ${user ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex-col justify-center flex h-full'>
                {user ?
                <div className='absolute h-full right-[-1.6em] hover:right-[-2em] group transition-all duraton-300'>
                    <div className='h-full flex justify-center flex-col'>
                        <button className='bg-gray-500 px-2 py-2 rounded-r-md text-gray-200 text-xl group-hover:px-3 transition-all duraton-300' onClick={handleShowBar}>{showBar ? '<' : '>'}</button>
                    </div>
                </div> : ''}
                <div className='w-full flex flex-wrap justify-center bg-gray-500 pt-4 rounded-r-md flex-col'>
                    <img className='w-20 my-0 mx-auto rounded-full border-2 object-cover' src={`http://localhost:5000/${user.profile_image ? user.profile_image : 'profiles_pic/default.png'}`} alt={user.username} title={user.username}></img>
                    <div className='w-full flex flex-wrap justify-center mt-4'>
                        <p className='text-gray-200 mb-4 w-full text-center'>¡Hola, {user.username}!</p> 
                        <ul>                        
                            <li className='text-center text-gray-200 mb-4 bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-400'><Link to="/account">Mi cuenta</Link></li>
                            <li className='text-center text-gray-200 mb-4 bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-400'><Link to="/account/collection">Mi colección</Link></li>
                            <li className='text-center text-gray-200 mb-4 bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-400'><Link to="/account/budget">Mi presupuesto</Link></li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default SideBar
