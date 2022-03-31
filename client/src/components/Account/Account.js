import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { userUpdate } from '../../actions/login'

const Account = ({ user }) => {
    const form = useRef(null)
    const [formData, setFormData] = useState({ username: user.username, password: user.password, profile_image: user.profile_image, _id: user._id, budget: user.budget, role: user.role })
    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault() 

        dispatch(userUpdate(new FormData(form.current)))
    }

    console.log(formData)

    return (
        <div>
            <form className='flex flex-wrap w-full' onSubmit={handleOnSubmit} ref={form}>
                <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="hidden" name="_id" id="_id" value={formData._id} onChange={(e) => { setFormData({ ...formData, _id: e.target.value }) }} />
                <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="hidden" name="role" id="role" value={formData.role} onChange={(e) => { setFormData({ ...formData, role: e.target.value }) }} />
                <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="hidden" name="profile_image_actual" id="profile_image_actual" value={formData.profile_image} onChange={(e) => { setFormData({ ...formData, profile_image: e.target.value})}}/>
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
                        <label className="w-full mb-2" htmlFor="titleEs">Presupuesto (0 ilimitado)</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="number" name="budget" id="budget" placeholder={'Presupuesto...'} value={formData.budget} onChange={(e) => { setFormData({ ...formData, budget: e.target.value})}}/>
                    </div>  
                </div>    
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="seriesCover">Imagen de perfil</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="file" name="profile_image" id="profile_image" onChange={(e) => { setFormData({ ...formData, profile_image: e.target.files[0]})}}/>
                    </div> 
                </div>
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>                        
                        <button className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="submit">Actualizar</button>
                    </div>  
                </div>    
            </form>
        </div>
    )
}

export default Account