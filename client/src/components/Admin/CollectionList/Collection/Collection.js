import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { deleteCollection, fetchCollections } from '../../../../actions/collections';

const Collection = ({ data }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {        
        dispatch(deleteCollection(data._id))
        dispatch(fetchCollections())
    }

    return (          
        <div className='w-full bg-gray-100 flex flex-wrap justify-between items-center border-b-2 border-gray-300 whitespace-nowrap hover:bg-gray-200'>     
            <div className='w-[5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data._id }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.titleEs }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.titleJp }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.author }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.artist }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.pesName }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.pjpName }</p>
                </div>
            </div>
            <div className='w-[12.5%]'>
                <div className='p-2'>
                    <p className='text-center overflow-hidden text-ellipsis hover:whitespace-normal hover:text-clip'>{ data.btType }</p>
                </div>
            </div> 
            <div className='w-[7.5%]'>
                <div className='p-2 text-center flex justify-around'>
                    <Link to={`/admin/edit/${data._id}`} className='text-center overflow-hidden text-ellipsis hover:bg-orange-500 bg-orange-400 px-2 py-1 text-white rounded-md'>Edit</Link>
                    <button className='text-center overflow-hidden text-ellipsis hover:bg-red-500 bg-red-400 px-2 text-white rounded-md py-1' onClick={ handleDelete }>Del</button>
                </div>
            </div>                   
        </div>                            
    )
}

export default Collection
