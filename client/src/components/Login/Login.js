import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
    
import { userLogin } from '../../actions/login'

const Login = () => {    
    const form = useRef(null)
    const [formData, setFormData] = useState({ username: '', password: '' })
    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault() 

        dispatch(userLogin(new FormData(form.current)))
    }

    return (
        <div>
            <form className='flex flex-wrap w-full' onSubmit={handleOnSubmit} ref={form}>
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="titleEs">Nombre de usuario</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="text" name="username" id="username" placeholder={'Nombre de usuario...'} value={formData.username} onChange={(e) => { setFormData({ ...formData, username: e.target.value})}}/>
                    </div>  
                </div>    
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="titleEs">Contraseña</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="password" name="password" id="password" placeholder={'Contraseña...'} value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value})}}/>
                    </div>  
                </div>    
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>                        
                        <button className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="submit">Iniciar sesión</button>
                    </div>  
                </div>    
            </form>
        </div>
    )
}

export default Login