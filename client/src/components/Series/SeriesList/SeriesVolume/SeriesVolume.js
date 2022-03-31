import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import dateFormat from 'dateformat';

import { removeCart, addCart } from '../../../../actions/series'

const SeriesVolume = ({ serie }) => {
    const user = useSelector((state) => state.user)
    const [isActive, setIsActive] = useState(false)
    const collection = useSelector((state) => state.collections.find((p) => p._id === parseInt(serie.collections_id)))
    const dispatch = useDispatch()

    const handleRemoveCart = (e) => {
        e.preventDefault()

        dispatch(removeCart({ vol: serie._id, user: user._id }))
        setIsActive(!isActive)
    }

    const handleAddCart = (e) => {
        e.preventDefault()
        dispatch(addCart({ vol: serie._id, user: user._id }))
        setIsActive(!isActive)
    }

    useEffect(() => {      
        if (serie.user_id) {
            setIsActive(true)   
        }        
    }, [serie])
    
    console.log(collection)

    return (
        collection === undefined ? '' : <div key={serie._id} className='w-[20%] drop-shadow-md shadow-black-900 relative'>
            {user && collection.user_id ?
            <div className='absolute right-4 top-2 z-20'>                
                {isActive ? <button className='bg-blue-500 text-gray-200 p-2 rounded-md hover:bg-blue-400 block' onClick={handleRemoveCart}>DEL</button> : <button className='bg-blue-500 text-gray-200 p-2 rounded-md hover:bg-blue-400 block mb-2' onClick={handleAddCart}>BUY</button>}
            </div>
             : ''}
            <div className='relative mx-2 overflow-hidden group max-h-[275px] rounded-t-md'>                
                <img className='w-full my-0 mx-auto' src={`http://localhost:5000/${serie.volCover}`} alt={collection.titleEs} title={collection.titleEs} />
            </div>   
            <div className='bg-blue-400 text-md text-gray-100 p-2 text-center mx-2 mb-4 rounded-b-md whitespace-nowrap'>
                <p>Volumen n.º {serie.volNumber}</p>
                <p>{serie.bwPages} páginas en B/N</p>                
                { serie.colorPages > 0 ? <p>{serie.colorPages} páginas a color</p> : <p>Sin páginas a color</p> }
                <p>{dateFormat(serie.releaseDate, "dd/mm/yyyy")} - {serie.price} €</p>
            </div>
        </div>  
  );
};

export default SeriesVolume;
