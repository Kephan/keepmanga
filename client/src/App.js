import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { clearUser } from './actions/login'

import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Mangas from './components/Collections/Collections'
import Admin from './components/Admin/Admin'
import CollectionForm from './components/Admin/CollectionList/Collection/CollectionForm/CollectionForm'
import Series from './components/Series/Series'
import Calendar from './components/Calendar/Calendar'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Account from './components/Account/Account'


/**
 * TODO: ¿Blog / Página de inicio?
 * TODO: Poner bonito el tema
 * 
 * Según:
 * TODO: Usuarios correctos
 */

const App = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(clearUser())
    }, [dispatch])

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>            
            <div>
                <SideBar user={user}/>
            </div>    
            <div className='pt-16 mx-auto pb-4 flex justify-center w-screen flex-wrap max-w-screen-2xl'>            
                <div className='w-[90%]'>
                    <Routes>
                        <Route path="/" element={<Mangas />} />                            
                        <Route path="/col" element={<Mangas />} /> 
                        <Route path="/account/collection" element={<Mangas isUser={true}/>}/> 
                        <Route path="/col/:id" element={<Series />} /> 
                        {user ? <Route path="/account/budget" element={<Series budget={ true }/>} />  : <Route path="/account/budget" element={<Mangas />} />}
                        <Route path="/calendar" element={<Calendar />} /> 
                        <Route path="/admin" element={<Admin />} />     
                        <Route path="/admin/:type" element={<CollectionForm />} />  
                        <Route path="/admin/:type/:id" element={<CollectionForm />} />                          
                        <Route path="/register" element={<Register />} /> 
                        <Route path="/login" element={<Login />} /> 
                        {user ? <Route path="/account" element={<Account user={ user } />} /> : <Route path="/account" element={<Mangas />} />} 
                    </Routes>                    
                </div>                                
            </div>
        </div>
    )
}

export default App
