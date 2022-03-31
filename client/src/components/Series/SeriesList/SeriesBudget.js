import React from 'react';
import { useSelector } from 'react-redux';
import SeriesVolume from './SeriesVolume/SeriesVolume'
import dateFormat from 'dateformat';

const SeriesBudget = ({ budget }) => {
    const series = useSelector((state) => state.series.filter((s) => dateFormat(s.releaseDate, 'mm') === dateFormat(new Date(), 'mm')));
    let total = 0
    series.map((serie) => total += serie.price)

    return (
       <div className='flex flex-wrap w-full'>
            <div className='w-[20%]'>
                <div className='w-full bg-blue-400 rounded-md flex flex-wrap justify-start flex-col items-center overflow-hidden'>
                    <h1 className='w-full text-center text-xl font-bold text-white py-2 bg-blue-900'>Presupuesto mensual</h1>
                    <div className='flex flex-wrap flex-col items-center justify-center w-full'>                    
                        {total >= budget && budget > 0?
                            <p className='text-center text-white text-lg my-4 bg-red-500 px-2 rounded-md'>{`${total} € / `} <span className='font-bold'>{budget} €</span></p>
                            :
                            total >= budget / 2 && budget > 0 ?
                                <p className='text-center text-white text-lg my-4 bg-orange-500 px-2 rounded-md'>{`${total} € / `} <span className='font-bold'>{budget} €</span></p>
                                :
                                <p className='text-center text-white text-lg my-4 bg-green-500 px-2 rounded-md'>{`${total} € / `} <span className='font-bold'>{budget > 0 ? `${budget} €` : 'Ilimitado'}</span></p>
                        }
                    </div>                    
                </div> 
            </div>
            <div className='w-[80%]'>
                <div className='w-full flex flex-wrap'>
                {series.map((serie) => (
                    <SeriesVolume key={serie._id} serie={serie}/>
                ))}
                </div>
            </div>
        </div>        
    );
};

export default SeriesBudget;
