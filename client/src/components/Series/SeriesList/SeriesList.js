import React from 'react';
import { useSelector } from 'react-redux';
import SeriesVolume from './SeriesVolume/SeriesVolume'

const SeriesList = ({ collection }) => {
    const series = useSelector((state) => state.series);

    return (
        collection === undefined ? <div className='px-4'><p>Loading...</p></div> : <div className='flex flex-wrap w-full'>
            <div className='w-[20%]'>
                <div className='w-full'>
                    <div className='w-full bg-blue-400 rounded-md flex flex-wrap justify-start flex-col items-center overflow-hidden mb-4'>
                        <h1 className='w-full text-center text-xl font-bold text-white py-2 bg-blue-900'>{ collection.titleEs }</h1>
                        <div className='text-white'>   
                            <ul className='py-2 m-0'>
                                <li>Autor: { collection.author }</li>
                                <li>Dibujante: { collection.artist }</li>
                                <li>Editorial ES: {collection.pesName}</li>
                                <li>Editorial JP: { collection.pjpName }</li>
                            </ul>    
                        </div>                    
                    </div> 
                    <div className='mx-4 drop-shadow-md shadow-black-900'>
                        <img className='w-full rounded-md mb-4' src={`http://localhost:5000/${collection.seriesCover}`} alt={collection.titleEs} title={collection.titleEs} />
                        <p className='text-justify'>{ collection.description }</p>
                    </div>                    
                </div>                
            </div>
            <div className='w-[80%]'>
                <div className='w-full flex flex-wrap'>
                {series.map((serie) => (
                    <SeriesVolume key={serie._id} serie={serie} collection={ collection }/>
                ))}
                </div>
            </div>
        </div>        
    );
};

export default SeriesList;
