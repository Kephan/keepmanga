import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { clearUser } from '../../actions/login'

const NavBar = ({ user }) => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(clearUser())    
    }

    return (
        <div className='fixed w-full h-12 bg-blue-500 text-gray-200 flex flex-row justify-between items-center z-50'>
            <div className='brand-logo text-xl font-bold px-2'>
                SinNombre
            </div>       
            <ul className='menu-list flex text-md flex-row font-bold'>
                <li className='menu-list-item px-4 hover:text-gray-100'><Link to="/">Inicio</Link></li>
                <li className='menu-list-item px-4 hover:text-gray-100'><Link to="/col">Colecciones</Link></li>
                <li className='menu-list-item px-4 hover:text-gray-100'><Link to="/calendar">Calendario</Link></li>
                {user ? '' : <li className='menu-list-item px-4 hover:text-gray-100'><Link to="/login">Iniciar sesión</Link></li>}
                {user ? '' : <li className='menu-list-item px-4 hover:text-gray-100'><Link to="/register">Registrarse</Link></li>}
                {user.role !== 2 ? '' : <li className='menu-list-item px-4 hover:text-gray-100'><Link to="/admin">Administración</Link></li>}
                {!user ? '' : <li className='menu-list-item px-4 hover:text-gray-100'><button className='font-bold' onClick={ handleLogOut }>Desconectarse</button></li>}
            </ul>
        </div>
    )
}

export default NavBar
