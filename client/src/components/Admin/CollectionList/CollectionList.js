import React from 'react'
import { useSelector } from 'react-redux';
import Collection from './Collection/Collection';
import { Link } from 'react-router-dom';

const CollectionList = () => {
    const collections = useSelector((state) => state.collections);

    return ( !collections.length ? <div className='px-4'><p>Loading...</p></div> :
        <div className='text-gray-500 rounded'> 
            <div className='px-4 w-full flex flex-wrap'>
                <div className='w-full text-black'>
                    <div className='flex flex-wrap'>
                      <div className='w-full bg-blue-500 flex flex-wrap justify-between items-center hover:bg-blue-600 mb-4 rounded-md'>
                            <Link className='w-full text-gray-200 font-bold py-2 text-center' to="/admin/add">Añadir</Link>
                        </div>
                        <div className='w-full bg-blue-500 flex flex-wrap justify-between items-center rounded-t-md'>
                            <div className='w-[5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>(ID)</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Título (ES)</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Título (JP)</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Autor</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Dibujante</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Editorial (ES)</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Editorial (JP)</h3>
                                </div>
                            </div>
                            <div className='w-[12.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Tipo de libro</h3>
                                </div>
                            </div>
                            <div className='w-[7.5%]'>
                                <div className='p-2'>
                                    <h3 className='text-gray-200 font-bold text-center'>Acción</h3>
                                </div>
                            </div>
                        </div>
                        {collections.map((collection) => (                            
                            <Collection data={collection} key={collection._id} />                             
                        ))}   
                    </div> 
                </div>                    
            </div>                
        </div>
    )
}

export default CollectionList